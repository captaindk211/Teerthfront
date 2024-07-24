import User from "../models/User.js";
//import bcrypt from "bcrypt.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
//user registration
export const register = async (req, res) => {
  try {
    //hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });

    await newUser.save();

    res.status(200).json({ success: true, message: "Successfully created" });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create .Please try again not",
    });
  }
};
//user login
export const login = async (req, res) => {
  const email = req.body.email;
  console.log(req.body);
  // console.log(req.body.email);

  try {
    const user = await User.findOne({ email });
    console.log(user);
    //if user doesn't exist
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!checkCorrectPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect email or password" });
    }

    const { password, role, ...rest } = user._doc;
    const data = {
      id: user._id,
      role: user.role,
    };
    //create jwt token
    const token = jwt.sign(data, process.env.JWT_SECRET_KEY, {
      expiresIn: "15d",
    });
    console.log(user);
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        token,
        data: { ...rest },
        role,
      });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to login. Please try again" });
  }
};
