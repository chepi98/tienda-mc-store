import { NextResponse } from "next/server";
import { z } from "zod";
import { getSanityWriteClient } from "@/lib/sanity";

const schema = z.object({
  email: z.string().email().max(120),
  company: z.string().max(0).optional(),
});

const rateLimit = new Map<string, { count: number; lastRequest: number }>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 4;

const getClientIp = (request: Request) => {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
};

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const now = Date.now();
    const entry = rateLimit.get(ip) ?? { count: 0, lastRequest: now };

    if (now - entry.lastRequest > WINDOW_MS) {
      entry.count = 0;
      entry.lastRequest = now;
    }

    entry.count += 1;
    rateLimit.set(ip, entry);

    if (entry.count > MAX_REQUESTS) {
      return NextResponse.json({ error: "Rate limit" }, { status: 429 });
    }

    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    if (body.company && body.company.length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const client = getSanityWriteClient();
    const normalizedEmail = body.email.toLowerCase().trim();
    const emailId = Buffer.from(normalizedEmail).toString("base64url");

    await client.createIfNotExists({
      _id: `newsletter.${emailId}`,
      _type: "newsletter",
      email: normalizedEmail,
      source: "homepage",
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
