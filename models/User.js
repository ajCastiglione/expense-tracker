const { DataTypes } = require("sequelize");
const dotenv = require("dotenv");
const sequelize = require("../config/db");
dotenv.config({ path: "../config/config.env" });
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        const salt = bcrypt.genSaltSync(10, "a");
        user.password = bcrypt.hashSync(user.password, salt);
      },
      beforeUpdate: async (user) => {
        const salt = bcrypt.genSaltSync(10, process.env.PASSWORD_HASH_KEY);
        user.password = bcrypt.hashSync(user.password, salt);
      },
    },
    instanceMethods: {
      validPassword: (password) => {
        return bcrypt.compareSync(password, this.password);
      },
    },
    timestamps: false,
  }
);

User.prototype.validPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

User.prototype.generateAuthToken = async (id) => {
  const token = await jwt.sign({ id }, process.env.JWT_KEY, {
    expiresIn: "7d",
  });
  return token;
};

module.exports = User;
