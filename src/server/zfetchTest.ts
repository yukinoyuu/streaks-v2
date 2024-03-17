import { z } from "zod"

const testValidator = z.array(z.object({
    id: z.number(),
    test: z.string()
}))

export default testValidator