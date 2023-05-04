
import { UserCreateRequest, GETUserRequest } from "types/articles/user.controller.types";
import { UserService } from "../services";


export const GetUsers = async (req: GETUserRequest) => {
	return UserService.getUsers(req.query)
}

export const CreateUser = async (req: UserCreateRequest) => {
	return UserService.createUser(req.body)
}

export default {
	GetUsers,
	CreateUser,
}