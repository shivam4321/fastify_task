export interface UserAttributes {
    id?: string;
    name?: string;
    phone_number?: string;
    email?: string;
    address?: string;
    ip?: string;
    amount?: number;
    balance?: number;
    bank_account_number?: number;
    is_active?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface GetUserAttributes {
    page?: any;
    limit?: any;
    sort?: string;
    offset?: any;
    search?: string;
    sortOrder?: string;
    active?: any;
}

export interface SendUserAttributes {
    data: [UserAttributes]
    limit: number;
    total: number;
    totalPages: number;
}