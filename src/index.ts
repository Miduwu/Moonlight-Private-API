import fastify from "fastify";

const server = fastify()

server.register(require("./routes/index"))

//process.on("uncaughtException", () => null)

server.listen({
    port: 3000,
	host: "0.0.0.0"
}).then(() => console.log("API is online!"))