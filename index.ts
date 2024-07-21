import { db } from "./db";
import { sql } from "drizzle-orm";

const query = sql`select 'hello world' as text`;
const result = await db.execute(query);
console.log(result.rows);
