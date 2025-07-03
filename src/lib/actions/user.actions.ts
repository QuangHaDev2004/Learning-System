/* eslint-disable @typescript-eslint/no-unused-vars */
import User, { IUser } from "@/database/user.model";
import { connectDB } from "../mongoose";

export default async function createUser(params: IUser) {
  try {
    connectDB();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {}
}
