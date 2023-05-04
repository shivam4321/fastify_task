import fastify, { FastifyServerOptions } from "fastify";
import { userRouter } from "./routes";

const App = (options: FastifyServerOptions) => {
	const app = fastify(options)

	app.get("/", async () => "SERVER");
	app.register(userRouter, { prefix: "/api/v1/user" });
	return app
}
export default App