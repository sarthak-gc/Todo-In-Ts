import express, { Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import User from "../models/UserModel";
import dotenv from "dotenv";
dotenv.config();
const userRoute = express.Router();

const jwt = jsonwebtoken;
const jwtSecret = process.env.JWT_SECRET_CODE as string;

userRoute.post("/register", async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;

  const user = await User.findOne({
    email,
  });

  if (user) {
    res.json("user already exists with this email");
    return;
  }
  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    res.status(201).send("User Added");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Error adding user");
  }
});

userRoute.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
  });

  if (!user) {
    res.json("invalid credentials");
    return;
  }
  req.id = user._id;

  if (user.password === password) {
    // const expirationTime = Math.floor(Date.now() / 1000) + 15 * 60;

    const code = jwt.sign(
      {
        email,
        id: req.id,
      },
      jwtSecret
      // {
      // expiresIn: expirationTime,
      // }
    );
    req.id = user._id;

    res.json({ msg: "login successful", code });
    return;
  } else {
    console.log("user not found");
    res.json({ msg: "User not found" });
  }
});

export default userRoute;
