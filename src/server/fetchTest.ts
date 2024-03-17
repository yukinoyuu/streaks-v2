import sql from "./sql";
import testValidator from "./zfetchTest";

export default async function fetchTest() {
    const obj = await sql`SELECT * FROM test`
    return obj
}