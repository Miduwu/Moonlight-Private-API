import * as F from "fastify";
import fs from "node:fs";
import { join } from "node:path";

export default (fastify: F.FastifyInstance, ops: unknown, done: F.DoneFuncWithErrOrRes) => {
    fs.readdirSync("./src/routes").forEach(s => {
        let data = require(join(process.cwd(), `/src/routes/${s}`)).data
        if(!data) return
        fastify.route(data)
        
    })
    done()
}