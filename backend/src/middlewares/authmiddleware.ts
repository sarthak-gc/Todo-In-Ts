import express, { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import UserModel from "../models/UserModel";
dotenv.config();
const jwtSecret = process.env.JWT_SECRET_CODE as string;

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.json({ error: "Token Not provided" });
    return;
  }

  if (!authHeader.startsWith("Bearer ")) {
    res.json({ error: "Invalid Token" });
    return;
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, jwtSecret) as JwtPayload;

    req.email = decoded.email;
    req.id = decoded.id;

    const user = await UserModel.findOne({ _id: req.id });

    if (!user) {
      res.json({
        msg: "user not found in the database",
      });
      return;
    }

    next();
  } catch (e) {
    console.log("Authentication Error : ", e);
    res.json({ msg: "invalid user token" });
  }
};

export default authMiddleware;
