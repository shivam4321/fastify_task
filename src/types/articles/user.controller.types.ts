import { FastifyRequest } from "fastify";

export type ArticleCreateRequest = FastifyRequest<{
	Body: {
		title?: string | undefined;
		text?: string | undefined;
		type?: string | undefined;
	};
}>;

export type UserCreateRequest = FastifyRequest<{
	Body: {
		name?: string;
		phone_number?: string;
		email?: string;
		address?: string | undefined;
		ip?: string | undefined;
		amount?: number;
		balance?: number;
		bank_account_number?: number;
		is_active?: boolean;
	};
}>;

export type GETUserRequest = FastifyRequest<{
	Querystring: {
		page?: any | undefined;
		limit?: any | undefined;
		sort?: string | undefined;
		offset?: any | undefined;
		search?: string | undefined;
		sortOrder?: string | undefined;
	};
}>;