const { Sequelize } = require("sequelize");
const dbSchema = require("./databaseSchema");

const db = new Sequelize(dbSchema.db, dbSchema.user, dbSchema.password, {
  ...dbSchema.opts,
});

async function connectDB() {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log(error);
  }
}
connectDB();

module.exports = db;
