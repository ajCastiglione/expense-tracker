const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
dotenv.config({ path: "./config/config.env" });


const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 300000,
      idle: 1000000,
    },
  }
);

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;
