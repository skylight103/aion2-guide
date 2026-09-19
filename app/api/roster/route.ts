import { parseRoster } from "@/lib/roster";
import { BlobPreconditionFailedError, readRoster, writeRoster } from "@/lib/roster-store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const payload = await readRoster();
  return Response.json(payload, { headers: { "Cache-Control": "no-store" } });
}

export async function PUT(request: Request) {
  const body = (await request.json()) as { rows?: unknown; etag?: string | null };
  const rows = parseRoster(body.rows);
  try {
    const payload = await writeRoster(rows, body.etag ?? null);
    return Response.json(payload, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    if (error instanceof BlobPreconditionFailedError) {
      const current = await readRoster();
      return Response.json(current, { status: 409, headers: { "Cache-Control": "no-store" } });
    }
    throw error;
  }
}
