import postgres from "postgres"
import { z } from "zod"

const strVal = z.string()
const supabasePostgresLink = strVal.parse(process.env.SUPABASE_POSTGRES_LINK)

const sql = postgres(supabasePostgresLink) 

console.log(sql)

export default sql