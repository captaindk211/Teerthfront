import express from "express";
import {
  updateUser,
  deleteUser,
  getSingleUser,
  createUser,
} from "../controllers/userController.js";
const router = express.Router();

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

//update User
router.put("/:id", verifyUser, updateUser);

//delete User
router.delete("/:id", verifyUser, deleteUser);

//get Single User
router.get("/:id", verifyUser, getSingleUser);

//get all Users
router.post("/", verifyAdmin, createUser);

export default router;
