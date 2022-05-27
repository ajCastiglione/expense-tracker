const mongoose = require("mongoose");
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const TransactionSchema = sequelize.define("Transaction", {
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
});

console.log(TransactionSchema === sequelize.models.Transaction);
