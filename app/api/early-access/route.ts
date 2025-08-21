// app/api/early-access/route.ts
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
// ⬇️ korrigjo rrugën sipas strukturës tënde
import { ddb, TABLE } from "../../lib/db";

// ID e shkurtër si "safe PK" - server-side only
function makeId() {
  // Use crypto for better randomness on server
  const timestamp = Date.now().toString(36);
  const randomBytes = require('crypto').randomBytes(4).toString('hex');
  return (timestamp + randomBytes).toUpperCase();
}

export async function POST(req: Request) {
  try {
    // Check environment variables
    if (!TABLE) {
      console.error('TABLE_NAME environment variable is not set');
      return NextResponse.json({ ok: false, reason: "configuration_error" }, { status: 500 });
    }

    // Parse and validate request body
    const body = (await req.json().catch(() => ({}))) as { email?: string };
    const email = (body?.email || "").toString().trim().toLowerCase();

    // Validate email format
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !re.test(email)) {
      return NextResponse.json({ ok: false, reason: "bad_email" }, { status: 400 });
    }

    const id = makeId();
    const createdAt = new Date().toISOString();

    // Save to DynamoDB with detailed error handling
    try {
      await ddb.send(
        new PutCommand({
          TableName: TABLE,
          Item: { id, email, createdAt },
        })
      );
    } catch (dbError: any) {
      console.error('DynamoDB Error:', {
        name: dbError.name,
        message: dbError.message,
        code: dbError.$metadata?.httpStatusCode,
        table: TABLE
      });

      // Handle specific DynamoDB errors
      if (dbError.name === 'ResourceNotFoundException') {
        return NextResponse.json({
          ok: false,
          reason: "table_not_found",
          details: "DynamoDB table does not exist"
        }, { status: 500 });
      } else if (dbError.name === 'UnrecognizedClientException') {
        return NextResponse.json({
          ok: false,
          reason: "auth_error",
          details: "Invalid AWS credentials"
        }, { status: 500 });
      } else if (dbError.name === 'ValidationException') {
        return NextResponse.json({
          ok: false,
          reason: "validation_error",
          details: "Invalid data format"
        }, { status: 500 });
      }

      // Re-throw for general error handling
      throw dbError;
    }

    return NextResponse.json({
      ok: true,
      message: "Faleminderit! Do t'ju njoftojmë shpejt."
    }, { status: 200 });

  } catch (err: any) {
    console.error('General Error in early access API:', {
      name: err.name,
      message: err.message,
      stack: err.stack
    });

    // Return generic error without exposing internal details
    return NextResponse.json({
      ok: false,
      reason: "server_error",
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    }, { status: 500 });
  }
}
