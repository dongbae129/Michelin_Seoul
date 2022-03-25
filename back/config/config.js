const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "awstest",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: 0,
  },
  test: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "awstest",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: 0,
  },
  production: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "awstest",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: 0,
  },
};
