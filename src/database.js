var Sequelize = require('sequelize');

const database = new Sequelize(
  process.env.DATABASE, // name database
  process.env.USER_NAME, // user database
  process.env.USER_PASSWORD, // password database
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT // mariadb / sqlite / postgres
  }
);

database.sync()

module.exports = database;