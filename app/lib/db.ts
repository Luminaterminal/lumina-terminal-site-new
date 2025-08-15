// lib/db.ts
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

export const TABLE = process.env.TABLE_NAME as string;

const client = new DynamoDBClient({
  region: process.env.LUMINA_REGION,
  credentials: {
    accessKeyId: process.env.LUMINA_AKID as string,
    secretAccessKey: process.env.LUMINA_SAK as string,
  },
});

export const ddb = DynamoDBDocumentClient.from(client, {
  marshallOptions: { removeUndefinedValues: true },
});
