// app/api/early-access/route.ts
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
// ⬇️ korrigjo rrugën sipas strukturës tënde
import { ddb, TABLE } from "../../../lib/db";

// ID e shkurtër si "safe PK"
function makeId() {
  return (
    Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
  ).toUpperCase();
}

export async function POST(req: Request) {
  try {
    // mos lër tekst jashtë-komenti këtu, përndryshe prishet build-i
    const body = (await req.json().catch(() => ({}))) as { email?: string };
    const email = (body?.email || "").toString().trim().toLowerCase();

    // validim i thjeshtë
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !re.test(email)) {
      return NextResponse.json({ ok: false, reason: "bad_email" }, { status: 400 });
    }

    const id = makeId();
    const createdAt = new Date().toISOString();

    // Ruaj te DynamoDB
    await ddb.send(
      new PutCommand({
        TableName: TABLE,
        Item: { id, email, createdAt },
        // Nëse dëshiron të shmangësh dublikatat sipas *id*-s, kjo s’ndihmon.
        // Duhet PK = email që të jetë unik, ose përdor ConditionExpression për email
        // vetëm nëse email është Key. Për momentin e lëmë pa kusht.
        // ConditionExpression: "attribute_not_exists(id)",
      })
    );

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    // mos ekspozo sekrete / env; kthe mesazh minimal
    // nëse në të ardhmen përdor ConditionExpression për unik, mund të kapësh dublikatat:
    // if (err?.name === "ConditionalCheckFailedException") return NextResponse.json({ ok: true });
    return NextResponse.json({ ok: false, reason: "server_error" }, { status: 500 });
  }
}
