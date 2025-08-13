// app/lib/db.ts
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

// Nxjerrim env nga serveri (Amplify i injekton në build/runtime të serverit)
const region = process.env.LUMINA_REGION ?? "";
const accessKeyId = process.env.LUMINA_AKID ?? "";
const secretAccessKey = process.env.LUMINA_SAK ?? "";

if (!region || !accessKeyId || !secretAccessKey) {
  throw new Error(
    "Mungojnë env vars: LUMINA_REGION / LUMINA_AKID / LUMINA_SAK. Shko te Amplify → Hosting → Environment variables dhe plotësoji."
  );
}

// Klienti bazë i DynamoDB
const raw = new DynamoDBClient({
  region,
  credentials: { accessKeyId, secretAccessKey },
});

// Document client (punon me objekte JSON lehtë)
export const ddb = DynamoDBDocumentClient.from(raw, {
  marshallOptions: { removeUndefinedValues: true },
});

// Emri i tabelës (nga env ose fallback)
export const TABLE = process.env.TABLE_NAME || "Early_access";
