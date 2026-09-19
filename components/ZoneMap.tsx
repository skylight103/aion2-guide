"use client";

import { useEffect, useMemo, useRef } from "react";
import { MapPinTooltip } from "@/components/MapPinTooltip";
import { pinPoint } from "@/lib/mapPinCoords";
import {
  mapArt,
  type MapFaction,
  type MapLayer,
  type MapPin,
} from "@/lib/weekOneMap";

const WORLD = 1000;
const layerClass: Record<MapLayer, string> = {
  hub: "map-pin-hub",
  sealed: "map-pin-sealed",
  stronghold: "map-pin-fort",
  trace: "map-pin-trace",
};

type Transform = { x: number; y: number; s: number };

type MapApi = {
  zoomBy: (factor: number) => void;
  fit: () => void;
  focus: (x: number, y: number) => void;
};

type Props = {
  faction: MapFaction;
  pins: MapPin[];
  selected: string | null;
  onSelect: (id: string | null) => void;
  onDetailChange?: (detail: boolean) => void;
  found?: Set<string>;
  onToggleFound?: (id: string) => void;
};

export function ZoneMap({
  faction,
  pins,
  selected,
  onSelect,
  onDetailChange,
  found,
  onToggleFound,
}: Props) {
  const viewRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<MapApi | null>(null);
  const cur = useRef<Transform>({ x: 0, y: 0, s: 1 });
  const fitRef = useRef<Transform>({ x: 0, y: 0, s: 1 });
  const animRef = useRef(0);
  const chaseRef = useRef(0);
  const dragRef = useRef<{ px: number; py: number; x: number; y: number } | null>(null);
  const pinchRef = useRef<{ dist: number } | null>(null);
  const pannedRef = useRef(false);
  const onSelectRef = useRef(onSelect);
  const onDetailRef = useRef(onDetailChange);
  const lastFocus = useRef<string | null>(null);
  const detailRef = useRef<boolean | null>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const placeTipRef = useRef<() => void>(() => {});
  const selectedRef = useRef(selected);
  onSelectRef.current = onSelect;
  onDetailRef.current = onDetailChange;
  selectedRef.current = selected;

  const placed = useMemo(() => {
    const out: { pin: MapPin; x: number; y: number; side: number }[] = [];
    for (const pin of pins) {
      const pt = pinPoint(pin);
      if (!pt) continue;
      let side = 0;
      for (let i = 0; i < pin.id.length; i++) side = (side + pin.id.charCodeAt(i)) % 4;
      out.push({ pin, x: pt.x, y: pt.y, side });
    }
    return out;
  }, [pins]);
  const placedRef = useRef(placed);
  placedRef.current = placed;

  useEffect(() => {
    const view = viewRef.current;
    const world = worldRef.current;
    if (!view || !world) return;

    const placeTip = () => {
      const tip = tipRef.current;
      const id = selectedRef.current;
      if (!tip || !id) return;
      const hit = placedRef.current.find((p) => p.pin.id === id);
      if (!hit) return;
      const pt = { x: hit.x, y: hit.y };
      const { x, y, s } = cur.current;
      const px = x + (pt.x / 100) * WORLD * s;
      const py = y + (pt.y / 100) * WORLD * s;
      const { width, height } = size();
      tip.style.left = `${px}px`;
      tip.style.top = `${py}px`;
      const padT = 56;
      const padL = 58;
      const padR = Math.min(width * 0.32, 300) + 28;
      const padB = 20;
      const roomLeft = px - padL;
      const roomRight = width - padR - px;
      tip.dataset.side = roomRight >= 320 || roomRight >= roomLeft ? "right" : "left";
      tip.dataset.align = py < height * 0.3 ? "start" : py > height * 0.45 ? "end" : "mid";
      const clamp = () => {
        const box = tip.getBoundingClientRect();
        const viewBox = view.getBoundingClientRect();
        let dx = Number.parseFloat(tip.style.getPropertyValue("--tip-shift-x")) || 0;
        let dy = Number.parseFloat(tip.style.getPropertyValue("--tip-shift-y")) || 0;
        if (box.left < viewBox.left + padL) dx += viewBox.left + padL - box.left;
        if (box.right > viewBox.right - padR) dx += viewBox.right - padR - box.right;
        if (box.top < viewBox.top + padT) dy += viewBox.top + padT - box.top;
        if (box.bottom > viewBox.bottom - padB) dy += viewBox.bottom - padB - box.bottom;
        tip.style.setProperty("--tip-shift-x", `${dx}px`);
        tip.style.setProperty("--tip-shift-y", `${dy}px`);
      };
      tip.style.setProperty("--tip-shift-x", "0px");
      tip.style.setProperty("--tip-shift-y", "0px");
      clamp();
      clamp();
    };
    placeTipRef.current = placeTip;

    const apply = () => {
      const { x, y, s } = cur.current;
      world.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${s})`;
      world.style.setProperty("--map-s", String(s));
      const detail = s >= fitRef.current.s * 1.55;
      const labels = s >= fitRef.current.s * 1.7;
      view.classList.toggle("is-detail", detail);
      view.classList.toggle("is-labels", labels);
      if (detailRef.current !== detail) {
        detailRef.current = detail;
        onDetailRef.current?.(detail);
      }
      placeTip();
    };

    const size = () => view.getBoundingClientRect();

    const fitTransform = (): Transform => {
      const { width, height } = size();
      const s = Math.min(width / WORLD, height / WORLD) * 0.96;
      return { x: (width - WORLD * s) / 2, y: (height - WORLD * s) / 2, s };
    };

    const clampS = (s: number) => {
      const fit = fitRef.current.s;
      return Math.min(fit * 8, Math.max(fit * 0.88, s));
    };

    const setScaleAround = (nextS: number, ox: number, oy: number) => {
      const { x, y, s } = cur.current;
      const s2 = clampS(nextS);
      cur.current = { s: s2, x: ox - ((ox - x) / s) * s2, y: oy - ((oy - y) / s) * s2 };
      apply();
    };

    const stopMotion = () => {
      cancelAnimationFrame(animRef.current);
      cancelAnimationFrame(chaseRef.current);
      animRef.current = 0;
      chaseRef.current = 0;
    };

    const animateTo = (end: Transform, ms: number) => {
      stopMotion();
      const start = { ...cur.current };
      const t0 = performance.now();
      const run = (now: number) => {
        const u = Math.min(1, (now - t0) / ms);
        const e = 1 - (1 - u) ** 3;
        cur.current = {
          x: start.x + (end.x - start.x) * e,
          y: start.y + (end.y - start.y) * e,
          s: start.s + (end.s - start.s) * e,
        };
        apply();
        if (u < 1) animRef.current = requestAnimationFrame(run);
      };
      animRef.current = requestAnimationFrame(run);
    };

    const animateScaleAround = (nextS: number, ox: number, oy: number, ms: number) => {
      stopMotion();
      const s0 = cur.current.s;
      const s1 = clampS(nextS);
      const wx = (ox - cur.current.x) / s0;
      const wy = (oy - cur.current.y) / s0;
      const t0 = performance.now();
      const run = (now: number) => {
        const u = Math.min(1, (now - t0) / ms);
        const e = 1 - (1 - u) ** 3;
        const s = s0 + (s1 - s0) * e;
        cur.current = { s, x: ox - wx * s, y: oy - wy * s };
        apply();
        if (u < 1) animRef.current = requestAnimationFrame(run);
      };
      animRef.current = requestAnimationFrame(run);
    };

    const fit = (smooth: boolean) => {
      const next = fitTransform();
      fitRef.current = next;
      if (smooth) animateTo(next, 320);
      else {
        stopMotion();
        cur.current = next;
        apply();
      }
    };

    const center = () => {
      const { width, height } = size();
      return { x: Math.max(80, (width - 312) / 2), y: height / 2 };
    };

    const zoomBy = (factor: number) => {
      const c = center();
      animateScaleAround(cur.current.s * factor, c.x, c.y, 280);
    };

    const chase = { s: 1, ox: 0, oy: 0 };

    const stepChase = () => {
      const ds = chase.s - cur.current.s;
      if (Math.abs(ds) < 0.0007) {
        setScaleAround(chase.s, chase.ox, chase.oy);
        chaseRef.current = 0;
        return;
      }
      setScaleAround(cur.current.s + ds * 0.28, chase.ox, chase.oy);
      chaseRef.current = requestAnimationFrame(stepChase);
    };

    const onWheel = (e: WheelEvent) => {
      if ((e.target as HTMLElement).closest(".map-tip, .week-map-zoom")) return;
      e.preventDefault();
      cancelAnimationFrame(animRef.current);
      animRef.current = 0;
      const rect = size();
      const pixel = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * 800 : e.deltaY;
      const factor = Math.exp(-pixel * 0.00115);
      chase.ox = e.clientX - rect.left;
      chase.oy = e.clientY - rect.top;
      chase.s = clampS((chaseRef.current ? chase.s : cur.current.s) * factor);
      if (!chaseRef.current) chaseRef.current = requestAnimationFrame(stepChase);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0 || pinchRef.current) return;
      if ((e.target as HTMLElement).closest(".map-pin, .map-tip, .week-map-zoom")) return;
      stopMotion();
      pannedRef.current = false;
      view.setPointerCapture(e.pointerId);
      dragRef.current = { px: e.clientX, py: e.clientY, x: cur.current.x, y: cur.current.y };
    };

    const onPointerMove = (e: PointerEvent) => {
      const drag = dragRef.current;
      if (!drag || pinchRef.current) return;
      const dx = e.clientX - drag.px;
      const dy = e.clientY - drag.py;
      if (!pannedRef.current && Math.hypot(dx, dy) > 6) {
        pannedRef.current = true;
        view.classList.add("is-panning");
      }
      cur.current = { ...cur.current, x: drag.x + dx, y: drag.y + dy };
      apply();
    };

    const endDrag = (e: PointerEvent) => {
      dragRef.current = null;
      view.classList.remove("is-panning");
      try {
        view.releasePointerCapture(e.pointerId);
      } catch {
        /* already released */
      }
    };

    const touchDist = (a: Touch, b: Touch) => Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        stopMotion();
        dragRef.current = null;
        pinchRef.current = { dist: touchDist(e.touches[0], e.touches[1]) };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 2 || !pinchRef.current) return;
      e.preventDefault();
      const rect = size();
      const a = e.touches[0];
      const b = e.touches[1];
      const dist = touchDist(a, b);
      const ox = (a.clientX + b.clientX) / 2 - rect.left;
      const oy = (a.clientY + b.clientY) / 2 - rect.top;
      setScaleAround(cur.current.s * (dist / pinchRef.current.dist), ox, oy);
      pinchRef.current.dist = dist;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (e.touches.length < 2) pinchRef.current = null;
    };

    const onClick = (e: MouseEvent) => {
      if (pannedRef.current) {
        pannedRef.current = false;
        return;
      }
      if ((e.target as HTMLElement).closest(".map-pin, .map-tip")) return;
      onSelectRef.current(null);
    };

    fit(false);
    const ro = new ResizeObserver(() => {
      const next = fitTransform();
      const prev = fitRef.current;
      fitRef.current = next;
      if (animRef.current || chaseRef.current || dragRef.current || pinchRef.current) {
        apply();
        return;
      }
      const parked =
        Math.abs(cur.current.s - prev.s) < 0.02 &&
        Math.abs(cur.current.x - prev.x) < 12 &&
        Math.abs(cur.current.y - prev.y) < 12;
      if (parked) cur.current = next;
      apply();
    });
    ro.observe(view);
    view.addEventListener("wheel", onWheel, { passive: false });
    view.addEventListener("pointerdown", onPointerDown);
    view.addEventListener("pointermove", onPointerMove);
    view.addEventListener("pointerup", endDrag);
    view.addEventListener("pointercancel", endDrag);
    view.addEventListener("touchstart", onTouchStart, { passive: true });
    view.addEventListener("touchmove", onTouchMove, { passive: false });
    view.addEventListener("touchend", onTouchEnd);
    view.addEventListener("click", onClick);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onSelectRef.current(null);
    };
    window.addEventListener("keydown", onKey);

    apiRef.current = {
      zoomBy,
      fit: () => fit(true),
      focus: (px, py) => {
        const c = center();
        const s2 = clampS(Math.max(cur.current.s, fitRef.current.s * 2.35));
        animateTo({ s: s2, x: c.x - px * s2, y: c.y - py * s2 }, 380);
      },
    };

    return () => {
      stopMotion();
      apiRef.current = null;
      ro.disconnect();
      view.removeEventListener("wheel", onWheel);
      view.removeEventListener("pointerdown", onPointerDown);
      view.removeEventListener("pointermove", onPointerMove);
      view.removeEventListener("pointerup", endDrag);
      view.removeEventListener("pointercancel", endDrag);
      view.removeEventListener("touchstart", onTouchStart);
      view.removeEventListener("touchmove", onTouchMove);
      view.removeEventListener("touchend", onTouchEnd);
      view.removeEventListener("click", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [faction]);

  useEffect(() => {
    if (!selected) {
      lastFocus.current = null;
      return;
    }
    if (lastFocus.current === selected) return;
    const hit = placed.find((p) => p.pin.id === selected);
    if (!hit) return;
    lastFocus.current = selected;
    apiRef.current?.focus((hit.x / 100) * WORLD, (hit.y / 100) * WORLD);
  }, [selected, placed]);

  const selectedPin = placed.find((p) => p.pin.id === selected)?.pin ?? null;

  useEffect(() => {
    placeTipRef.current();
    const id = requestAnimationFrame(() => placeTipRef.current());
    return () => cancelAnimationFrame(id);
  }, [selected, selectedPin]);

  return (
    <div className="week-map-canvas">
      <div ref={viewRef} className="week-map-viewport" role="application" aria-label={`${mapArt[faction].label} map`}>
        <div ref={worldRef} className="week-map-world">
          <img src={mapArt[faction].src} alt="" width={WORLD} height={WORLD} draggable={false} />
          <div className="week-map-pins">
            {placed.map(({ pin, x, y, side }) => {
              const on = pin.id === selected;
              return (
                <button
                  key={pin.id}
                  type="button"
                  className={`map-pin map-pin-side-${side} ${layerClass[pin.layer]}${on ? " is-on" : ""}${found?.has(pin.id) ? " is-got" : ""}`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  aria-label={pin.name}
                  title={pin.name}
                  onPointerDown={(e) => e.stopPropagation()}
                  onPointerUp={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onSelect(pin.id);
                  }}
                >
                  <span className="map-pin-visual">
                    <span className="map-pin-dot" />
                    <span className="map-pin-name">{pin.name}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        {selectedPin ? (
          <div
            ref={tipRef}
            className="map-tip"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
          >
            <MapPinTooltip
              pin={selectedPin}
              onClose={() => onSelect(null)}
              found={found?.has(selectedPin.id) ?? false}
              onToggleFound={onToggleFound ? () => onToggleFound(selectedPin.id) : undefined}
            />
          </div>
        ) : null}
      </div>
      <div className="week-map-zoom">
        <button type="button" aria-label="Zoom in" onClick={() => apiRef.current?.zoomBy(1.45)}>
          +
        </button>
        <button type="button" aria-label="Zoom out" onClick={() => apiRef.current?.zoomBy(1 / 1.45)}>
          −
        </button>
        <button type="button" aria-label="Reset map" onClick={() => apiRef.current?.fit()}>
          Reset
        </button>
      </div>
      <p className="week-map-hint">Scroll or pinch to zoom · drag to pan · click a pin for the briefing</p>
    </div>
  );
}
