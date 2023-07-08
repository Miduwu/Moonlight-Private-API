import * as F from "fastify";

export const data: F.RouteOptions = {
    method: "GET",
    url: "/keepalive",
    handler: async function(request: F.FastifyRequest, reply: F.FastifyReply) {
        return { status: 200, data: "Done.", success: true }
    }
}