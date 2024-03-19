import mysql from "mysql";

export const db = mysql.createConnection({
  host: 'localhost',//process.env.DB_HOST,
  user: 'root',//process.env.DB_USER,
  password: 'root',//process.env.DB_PASSWORD,
  database: 'test'//process.env.DB,
});

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY `${process.env.DB_PASSWORD}`;