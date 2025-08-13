// app/lib/db.ts
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const region = process.env.LUMINA_REGION ?? "";
const accessKeyId = process.env.LUMINA_AKID ?? "";
const secretAccessKey = process.env.LUMINA_SAK ?? "";

if (!region || !accessKeyId || !secretAccessKey) {
  throw new Error(
    "Mungojnë env vars: LUMINA_REGION / LUMINA_AKID / LUMINA_SAK. Vendosi te Amplify → Hosting → Environment variables."
  );
}

const raw = new DynamoDBClient({
  region,
  credentials: { accessKeyId, secretAccessKey },
});

export const ddb = DynamoDBDocumentClient.from(raw, {
  marshallOptions: { removeUndefinedValues: true },
});

export const TABLE = process.env.TABLE_NAME || "Early_access";
