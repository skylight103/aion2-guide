"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { classes, emptyRow, roles, slots, type RosterRow } from "@/lib/roster";

type Payload = { rows: RosterRow[]; etag: string | null };

export function RosterTable() {
  const [rows, setRows] = useState<RosterRow[]>([emptyRow()]);
  const [ready, setReady] = useState(false);
  const skipSave = useRef(true);
  const etagRef = useRef<string | null>(null);
  const dirty = useRef(false);

  const apply = useCallback((payload: Payload) => {
    skipSave.current = true;
    dirty.current = false;
    etagRef.current = payload.etag;
    setRows(payload.rows.length ? payload.rows : [emptyRow()]);
  }, []);

  const load = useCallback(async () => {
    const res = await fetch("/api/roster", { cache: "no-store" });
    if (!res.ok) throw new Error("load failed");
    apply((await res.json()) as Payload);
  }, [apply]);

  const save = useCallback(async (nextRows: RosterRow[], etag = etagRef.current, attempt = 0) => {
    const res = await fetch("/api/roster", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rows: nextRows, etag }),
    });
    const payload = (await res.json()) as Payload;
    if (res.status === 409 && attempt < 1) {
      etagRef.current = payload.etag;
      await save(nextRows, payload.etag, attempt + 1);
      return;
    }
    if (!res.ok) throw new Error("save failed");
    dirty.current = false;
    etagRef.current = payload.etag;
  }, []);

  useEffect(() => {
    void load()
      .catch(() => apply({ rows: [emptyRow()], etag: null }))
      .finally(() => setReady(true));
  }, [apply, load]);

  useEffect(() => {
    if (!ready) return;
    if (skipSave.current) {
      skipSave.current = false;
      return;
    }
    dirty.current = true;
    const timer = window.setTimeout(() => {
      void save(rows);
    }, 600);
    return () => window.clearTimeout(timer);
  }, [ready, rows, save]);

  useEffect(() => {
    const refresh = () => {
      if (document.visibilityState === "hidden" || dirty.current) return;
      void load();
    };
    const timer = window.setInterval(refresh, 15000);
    document.addEventListener("visibilitychange", refresh);
    window.addEventListener("focus", refresh);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", refresh);
      window.removeEventListener("focus", refresh);
    };
  }, [load]);

  const update = (id: string, patch: Partial<RosterRow>) => {
    setRows((cur) => cur.map((row) => (row.id === id ? { ...row, ...patch } : row)));
  };

  return (
    <div>
      <div className="table-wrap">
        <table className="data">
          <thead>
            <tr>
              <th>Player</th>
              <th>Class</th>
              <th>Role</th>
              <th>Slot</th>
              <th>Details</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>
                  <input
                    className="w-full bg-transparent outline-none"
                    placeholder="Name"
                    value={row.player}
                    onChange={(e) => update(row.id, { player: e.target.value })}
                  />
                </td>
                <td>
                  <select
                    className="w-full bg-transparent"
                    value={row.className}
                    onChange={(e) => update(row.id, { className: e.target.value as RosterRow["className"] })}
                  >
                    {classes.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <select
                    className="w-full bg-transparent"
                    value={row.role}
                    onChange={(e) => update(row.id, { role: e.target.value as RosterRow["role"] })}
                  >
                    {roles.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <select
                    className="w-full bg-transparent"
                    value={row.slot}
                    onChange={(e) => update(row.id, { slot: e.target.value as RosterRow["slot"] })}
                  >
                    {slots.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    className="w-full bg-transparent outline-none"
                    placeholder="Discord / character / notes"
                    value={`${row.discord}${row.character || row.notes ? " · " : ""}${row.character}${row.notes ? ` · ${row.notes}` : ""}`.replace(/^ · /, "")}
                    onChange={(e) => update(row.id, { notes: e.target.value, discord: "", character: "" })}
                  />
                </td>
                <td>
                  <button className="text-[var(--danger)]" onClick={() => setRows((cur) => cur.filter((r) => r.id !== row.id))}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          className="rounded-full border border-[var(--gold)] px-4 py-2 text-sm text-[var(--gold-2)]"
          onClick={() => setRows((cur) => [...cur, emptyRow()])}
        >
          Add character
        </button>
        <button
          className="rounded-full border border-[var(--line)] px-4 py-2 text-sm"
          onClick={() => {
            const text = rows
              .map((r) => [r.player, r.className, r.role, r.slot, r.notes].filter(Boolean).join(" | "))
              .join("\n");
            void navigator.clipboard.writeText(text);
          }}
        >
          Copy for Discord
        </button>
      </div>
    </div>
  );
}
