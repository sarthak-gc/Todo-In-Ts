import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URI as string;

const connectDB = async () => {
  await mongoose.connect(url);
  console.log("Database connection successful");
};

connectDB();
