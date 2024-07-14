import mysql from "mysql2/promise.js";
import dotenv from "dotenv";
dotenv.config();

export const db = mysql.createPool({
  host: "localhost",
  user: process.env.USER_DB,
  database: process.env.DB_NAME,
  password: process.env.USER_PASSWORD_DB,
});
