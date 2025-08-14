// app/api/early-access/route.ts
import { NextResponse } from "next/server";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE } from "@/lib/db"; // ose "../../lib/db" nëse s’ke alias "@"

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({} as any));
    const email = (body?.email || "").toString().trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, message: "Email mungon ose është i pasaktë" }, { status: 400 });
    }

    // Ky kod vendos *gjithmonë* id + email + createdAt.
    // Në DynamoDB mjafton që të ekzistojë partition key (qoftë "email" OSE "id").
    // Pra ky version punon në të dy rastet.
    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    await ddb.send(
      new PutCommand({
        TableName: TABLE,              // duhet të jetë "Early_access" nga env
        Item: { id, email, createdAt } // të dy fushat ruhen; PK e tabelës do ta pranojë njërën
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

