// app/api/early-access/route.ts
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE } from "../../lib/db";

// ID e shkurtër si "safe PK"
function makeId() {
  return (Date.now().toString(36) + Math.random().toString(36).slice(2, 8)).toUpperCase();
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({} as any));
    const email = (body?.email || "").toString().trim();

    // validim i thjeshtë
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !re.test(email)) {
      return NextResponse.json({ ok: false, reason: "bad_email" }, { status: 400 });
    }

    const id = makeId();
    const createdAt = new Date().toISOString();

    // provo PutItem
    await ddb.send(
      new PutCommand({
        TableName: TABLE,
        Item: { id, email, createdAt },
      })
    );

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    // KTHE info për diagnozë (pa sekrete)
    const msg = err?.message || String(err);
    const code = err?.name || err?.code || "UnknownError";
    return NextResponse.json(
      {
        ok: false,
        reason: "aws_error",
        code,
        message: msg,
        table: process.env.TABLE_NAME || "n/a",
        env: {
          region: !!process.env.LUMINA_REGION,
          akid: !!process.env.LUMINA_AKID,
          sak: !!process.env.LUMINA_SAK,
        },
      },
      { status: 500 }
    );
  }
}
