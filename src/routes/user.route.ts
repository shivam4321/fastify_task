import { FastifyInstance } from "fastify";
import usersController from '../controllers/user.controller';

const userRouter = async (app: FastifyInstance) => {
	app.get(
		"/",
		usersController.GetUsers
	);

	app.post(
		"/create",
		usersController.CreateUser
	);
};

export default userRouter;