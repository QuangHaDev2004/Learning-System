/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectDB = async () => {
  if (!process.env.MONGODB_URL) {
    throw new Error("Database connection failed");
  }

  if (isConnected) {
    console.log("Database connection successful");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "learning_system",
    });

    isConnected = true;
    console.log("Database connection successful");
  } catch (error) {
    console.log("Database connection failed");
  }
};
