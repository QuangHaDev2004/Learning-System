import { EUserRole, EUserStatus } from "@/types/enums";
import { Document, model, models, Schema } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  course: Schema.Types.ObjectId;
  status: EUserStatus;
  role: EUserRole;
  createAt: Date;
}

const userSchema = new Schema<IUser>({
  clerkId: {
    type: String,
  },
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  avatar: {
    type: String,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: Object.values(EUserRole),
    default: EUserRole.USER,
  },
  status: {
    type: String,
    enum: Object.values(EUserStatus),
    default: EUserStatus.UNACTIVE,
  },
});

const User = models.User || model("User", userSchema);
export default User;
