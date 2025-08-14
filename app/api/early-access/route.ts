// app/api/early-access/route.ts
export const runtime = "nodejs";           // siguron Node runtime (jo Edge)
export const dynamic = "force-dynamic";    // shmang cache për POST

import { NextResponse } from "next/server";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
// IMPORT RELATIV nga /app/api/early-access -> /app/lib/db
import { ddb, TABLE } from "../../lib/db";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({} as any));
    const email = (body?.email || "").toString().trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, message: "Email mungon ose është i pasaktë" },
        { status: 400 }
      );
    }

    const id = randomUUID();
    const createdAt = new Date().toISOString();

    await ddb.send(
      new PutCommand({
        TableName: TABLE,
        Item: { id, email, createdAt },
      })
    );

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Dynamo Put error:", err);
    return NextResponse.json(
      { ok: false, message: err?.message ?? "Server error" },
      { status: 500 }
    );
  }
}
