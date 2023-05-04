import { UserAttributes, GetUserAttributes, SendUserAttributes } from 'types/articles/user.model.types';
import db from "../models";
import { Op } from 'sequelize';
const UserModel = db.User

interface LooseObject {
	[key: string]: any
}

export const getUsers = async (query: GetUserAttributes): Promise<SendUserAttributes> => {
	let { limit, sort, offset, search, sortOrder, active } = query;
	let condition: LooseObject = {};
	if (search) {
		condition = {
			[Op.or]: [{ name: { [Op.like]: `%${search}%` } }, { email: { [Op.like]: `%${search}%` } }, { bank_account_number: { [Op.like]: `%${search}%` } }]
		}
	}
	let orderBy = sort || "createdAt";
	sortOrder = sortOrder || "DESC";
	if (active) {
		active = active === "true" || active === "1" ? 1 : 0;
		condition.is_active = active;
	}
	offset = parseInt(offset) || 0;
	limit = parseInt(limit) || 25;

	const response = await UserModel.findAll({
		where: condition,
		order: [[orderBy, sortOrder]],
		offset: offset,
		limit: limit
	});
	const total = await UserModel.count({ where: condition });
	const totalPages = Math.ceil(total / limit);
	return ({ data: response, limit, total, totalPages });
	// UserAttributes
}

export const createUser = async (body: UserAttributes): Promise<UserAttributes> => {
	const response: UserAttributes = await UserModel.create(body)
	return response
}

export default {
	getUsers,
	createUser,
}