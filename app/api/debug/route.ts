// app/api/debug/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    region: !!process.env.LUMINA_REGION,
    akid: !!process.env.LUMINA_AKID,
    sak: !!process.env.LUMINA_SAK,
    table: process.env.TABLE_NAME || "(missing)",
    node: process.version,
  });
}
