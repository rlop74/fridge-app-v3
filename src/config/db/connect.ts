import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize("mydatabase", "myuser", dbPassword, {
  host: "localhost",
  dialect: "postgres"
})



export default sequelize;