import React, { useEffect, useState } from "react"
import { unstable_noStore as noStore } from "next/cache"
import fetchTest from "@/server/fetchTest"
import testValidator from "@/server/zfetchTest"
import { z } from "zod"

const schema = testValidator

type result = z.infer<typeof schema>

export default async function Home() {
    noStore()
    return(
        <>
            <h1>Hello from Postgres:</h1>
            <p>{JSON.stringify(await fetchTest())}</p>
        </>
    )
}