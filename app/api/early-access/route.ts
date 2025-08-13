// app/api/early-access/route.ts
import { NextResponse } from "next/server";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE } from "../../lib/db"; // relative: nga api/early-access te lib/db

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    await ddb.send(
      new PutCommand({
        TableName: TABLE,
        Item: { id, email, createdAt },
      })
    );

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Dynamo Put error:", err?.name ?? err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
