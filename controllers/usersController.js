const User = require("../models/User");

// @desc    Create new user account
// @route   GET /api/v1/users/register
// @access  Public
exports.createAccount = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Check if email already exists.
    const user = await User.findOne({ where: { email } });

    if (user) {
      return res.status(400).send({
        success: false,
        error: "Email already exists",
      });
    }

    const newUser = await User.create({ name, email, password });
    const token = await newUser.generateAuthToken(newUser.dataValues.id);

    return res.status(201).send({
      success: true,
      token,
    });
  } catch (err) {
    console.log(err);
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).send({
        success: false,
        error: "User already exists",
      });
    } else {
      return res.status(500).send({
        success: false,
        error: "Server Error",
      });
    }
  }
};

// @desc    Login to existing account
// @route   GET /api/v1/users/login
// @access  Public
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).send({
        success: false,
        error: "User not found",
      });
    }

    const isMatch = await user.validPassword(password, user.dataValues.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        error: "Incorrect Password",
      });
    }

    const token = await user.generateAuthToken(user.dataValues.id);
    return res.status(200).send({
      success: true,
      token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      error: "Server Error",
    });
  }
};
