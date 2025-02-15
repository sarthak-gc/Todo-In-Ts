import mongoose from "mongoose";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  todos: mongoose.Types.ObjectId[];
}
const UserSchema = new mongoose.Schema<User>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    required: true,
  },
  password: { type: String },
  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Todo" }],
});

const UserModel = mongoose.model<User>("User", UserSchema);

export default UserModel;
