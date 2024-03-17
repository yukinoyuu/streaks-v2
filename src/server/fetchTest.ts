import sql from "./sql";
import testValidator from "./zfetchTest";

export default async function fetchTest() {
    const obj = await sql`SELECT * FROM test`
    // console.log(obj)
    // testValidator.parse(obj) not working for some reason
    return obj
}