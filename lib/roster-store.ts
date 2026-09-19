import { BlobPreconditionFailedError, get, put } from "@vercel/blob";
import { emptyRow, parseRoster, type RosterRow } from "@/lib/roster";

const PATH = "roster.json";

export type RosterPayload = {
  rows: RosterRow[];
  etag: string | null;
};

async function streamText(stream: ReadableStream<Uint8Array>) {
  return new Response(stream).text();
}

export async function readRoster(): Promise<RosterPayload> {
  const result = await get(PATH, { access: "private", useCache: false });
  if (!result || result.statusCode !== 200) {
    return { rows: [emptyRow()], etag: null };
  }
  try {
    const parsed = JSON.parse(await streamText(result.stream)) as { rows?: unknown };
    return { rows: parseRoster(parsed.rows), etag: result.blob.etag };
  } catch {
    return { rows: [emptyRow()], etag: result.blob.etag };
  }
}

export async function writeRoster(rows: RosterRow[], etag?: string | null): Promise<RosterPayload> {
  const blob = await put(PATH, JSON.stringify({ rows }), {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 60,
    contentType: "application/json",
    ...(etag ? { ifMatch: etag } : {}),
  });
  return { rows, etag: blob.etag };
}

export { BlobPreconditionFailedError };
