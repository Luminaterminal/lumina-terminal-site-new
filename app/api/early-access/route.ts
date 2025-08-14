// app/api/early-access/route.ts
import { NextResponse } from "next/server";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE } from "@/lib/db"; // ose "../../lib/db" nëse s'ke alias "@"

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({} as any));
    const email = (body?.email || "").toString().trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, message: "Email mungon ose është i pasaktë" }, { status: 400 });
    }

    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    await ddb.send(
      new PutCommand({
        TableName: TABLE,
        Item: { id, email, createdAt } // ruajmë të dyja fushat -> tabela pranon atë që e ka PK
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
