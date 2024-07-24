import express from "express";
import { login, register } from "./../controllers/authController.js";
//import bcrypt from "bcrypt.cjs";
//const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
