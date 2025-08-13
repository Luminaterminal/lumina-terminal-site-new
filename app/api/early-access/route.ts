// app/api/early-access/route.ts
import { NextResponse } from "next/server";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "crypto";
import { ddb, TABLE } from "../../lib/db"; // <- kjo rrugë është FIX nga api → lib

// opsionale (health-check)
export async function GET() {
  return NextResponse.json({ ok: true });
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email mungon" }, { status: 400 });
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
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
