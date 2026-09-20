import html
import os
import re
from pathlib import Path

raw_path = Path(os.environ["TEMP"]) / "kanon-aion2.html"
out_dir = Path(r"C:\Users\iwako\Projects\Aion2Research\tmp-kanon")
out_dir.mkdir(exist_ok=True)
img_dir = out_dir / "images"
img_dir.mkdir(exist_ok=True)

raw = raw_path.read_text(encoding="utf-8", errors="replace")
print("chars", len(raw))


def strip(t: str) -> str:
    t = re.sub(r"<[^>]+>", " ", t)
    t = html.unescape(t)
    t = re.sub(r"\s+", " ", t).strip()
    return t


heads = re.findall(r"<h([1-6])[^>]*>(.*?)</h\1>", raw, re.I | re.S)
print("headings", len(heads))
head_lines = []
for lv, t in heads:
    s = strip(t)
    if s:
        head_lines.append(f"H{lv}: {s}")
(out_dir / "headings.txt").write_text("\n".join(head_lines), encoding="utf-8")
print("wrote headings", len(head_lines))

# Extract readable text from body, keep paragraph/list breaks
body = raw
body = re.sub(r"<script[\s\S]*?</script>", " ", body, flags=re.I)
body = re.sub(r"<style[\s\S]*?</style>", " ", body, flags=re.I)
body = re.sub(r"</(p|div|h[1-6]|li|tr|br)[^>]*>", "\n", body, flags=re.I)
body = re.sub(r"<li[^>]*>", "- ", body, flags=re.I)
body = re.sub(r"<[^>]+>", " ", body)
body = html.unescape(body)
body = re.sub(r"[ \t]+", " ", body)
body = re.sub(r"\n{3,}", "\n\n", body)
text = body.strip()
(out_dir / "fulltext.txt").write_text(text, encoding="utf-8")
print("text chars", len(text), "lines", text.count("\n"))

# Images: google docs export often inlines as data: or googleusercontent
img_tags = re.findall(r"<img\b[^>]*>", raw, flags=re.I)
print("img tags", len(img_tags))
data_count = 0
url_count = 0
saved = 0
for i, tag in enumerate(img_tags):
    m = re.search(r'src="([^"]+)"', tag, re.I)
    if not m:
        continue
    src = m.group(1)
    alt = ""
    am = re.search(r'alt="([^"]*)"', tag, re.I)
    if am:
        alt = am.group(1)
    if src.startswith("data:image"):
        data_count += 1
        header, b64 = src.split(",", 1)
        ext = "png"
        if "jpeg" in header or "jpg" in header:
            ext = "jpg"
        elif "webp" in header:
            ext = "webp"
        elif "gif" in header:
            ext = "gif"
        import base64

        blob = base64.b64decode(b64)
        # skip tiny icons
        if len(blob) < 8000:
            continue
        name = f"{i:03d}.{ext}"
        (img_dir / name).write_bytes(blob)
        saved += 1
    else:
        url_count += 1
        (out_dir / "image_urls.txt").write_text("", encoding="utf-8") if i == 0 else None

print("data images", data_count, "url images", url_count, "saved large", saved)

# Also dump nearby text around each img (first 80 chars after)
contexts = []
for i, m in enumerate(re.finditer(r"<img\b[^>]*>", raw, flags=re.I)):
    start = max(0, m.start() - 400)
    end = min(len(raw), m.end() + 800)
    chunk = strip(raw[start:end])[:400]
    contexts.append(f"IMG {i:03d}: {chunk}")
(out_dir / "image_context.txt").write_text("\n\n".join(contexts), encoding="utf-8")
print("contexts", len(contexts))
