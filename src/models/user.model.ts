import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    DataTypes,
} from "sequelize";
import sequelize from "../config/db/connect"

// CREATE TABLE IF NOT EXISTS users (
//     id SERIAL PRIMARY KEY,
//     first_name VARCHAR(255) NOT NULL,
//     last_name VARCHAR(255) NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     password_hash VARCHAR(255) NOT NULL,
//     preferred_expiry_within_seconds INT NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     deleted_at TIMESTAMP NULL
// );

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>;
    declare first_name: string;
    declare last_name: string;
    declare email: string;
    declare password_hash: string;
    declare preferred_expiry_within_seconds: number;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;
    declare deleted_at: CreationOptional<Date | null>;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password_hash: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        preferred_expiry_within_seconds: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: "users",
        timestamps: false, // We are managing timestamps manually
    }
);      

export default User;