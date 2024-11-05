// models/user.ts
import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  telegramId: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  createdAt: Date;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
  telegramId: { type: String, required: true, unique: true },
  username: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
