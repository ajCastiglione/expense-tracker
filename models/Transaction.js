const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Transaction = sequelize.define(
  "Transaction",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      trim: true,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false,
  }
);

console.log(Transaction === sequelize.models.Transaction);

module.exports = Transaction;
