"use strict";
// import * as Sequelize from "sequelize";
// import { Sequelize, Model, DataTypes, HookReturn } from 'sequelize';
import { Model, UUIDV4 } from "sequelize";
// import { HookReturn } from 'sequelize/types/hooks';
import { UserAttributes } from "types/articles/user.model.types";

module.exports = (sequelize: any, DataTypes: any) => {
    class User
        extends Model<UserAttributes>
        implements UserAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        id!: string;
        name!: string;
        phone_number!: string;
        email!: string;
        address!: string;
        ip!: string;
        amount!: number;
        balance!: number;
        bank_account_number!: number;
        is_active!: boolean;
        static associate(models: any) {
            // define association here
        }
    }
    User.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phone_number: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            address: {
                type: DataTypes.STRING,
            },
            ip: {
                type: DataTypes.STRING,
            },
            amount: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            balance: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            bank_account_number: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            is_active: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "User",
        }
    );

    User.addHook('beforeCreate', async (user: User) => {
        const { email } = user.dataValues;
        const existingUser = await User.findOne({ where: { email: email } });
        if (existingUser) {
            const error = new Error('Email already exists');
            throw error;
        }
    });

    return User;
};
