/* eslint-disable @typescript-eslint/no-unused-vars */
import User from "@/database/user.model";
import { connectDB } from "../mongoose";

type TCreateUserParams = {
  clerkId: string,
  username: string,
  email: string,
  name?: string,
  avatar?: string
}

export default async function createUser(params: TCreateUserParams) {
  try {
    connectDB();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {}
}
