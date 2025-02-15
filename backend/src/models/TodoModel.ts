import mongoose from "mongoose";

interface Todo {
  description: string;
  title: string;
  userId: mongoose.Types.ObjectId;
  completed: boolean;
  timeLimit: Date;
  dueDate: Date;
  priority: string;
}

const TodoSchema = new mongoose.Schema<Todo>({
  description: { type: String },
  title: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId },
  completed: { type: Boolean, default: false },
  dueDate: { type: Date, required: false },
  timeLimit: { type: Date, required: false },
  priority: {
    type: String,
    enum: ["low", "mid", "urgent", "clear"],
    default: "clear",
  },
});

const TodoModel = mongoose.model<Todo>("Todo", TodoSchema);

export default TodoModel;
