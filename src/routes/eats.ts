import * as F from "fastify";
import { API } from "easy-api.ts";

const api = new API({ port: 8000 })

type Params = { type: string }

export const data: F.RouteOptions = {
    method: "GET",
    url: "/eats/:type",
    handler: async function(req: F.FastifyRequest, res: F.FastifyReply) {
        let funcs = api.interpreter.functions
        switch((req.params as Params)["type"]) {
            case "all": 
                return funcs.map(f => { return {...f.data} })
            default:
                return { data: funcs.filter(f => f.data.name.replace("$", "").startsWith((req.params as Params)["type"].replace("$", ""))) }
        }
    }
}