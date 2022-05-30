const express = require("express");
const router = express.Router();
const { login, createAccount } = require("../controllers/usersController");

router.post("/login", login);
router.post("/register", createAccount);

module.exports = router;
