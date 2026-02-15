import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    DataTypes,
} from "sequelize";
import sequelize from "../config/db/connect"

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<string>;
    declare name: string;
}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
    },
);

export default User;