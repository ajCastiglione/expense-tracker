const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

module.exports = {
  db: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  opts: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 300000,
      idle: 1000000,
    },
  },
};
