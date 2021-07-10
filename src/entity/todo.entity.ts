import { TodoInterface } from "../interface";
import { Schema, model, Types } from "mongoose";

export const TodoSchema = new Schema<TodoInterface>({
  name: { type: String, required: true },
  accountId: {type: Types.ObjectId, ref: "Account"},
  isDone: {type: Boolean, default: false}, 
  c_at: { type: Date, default: new Date() },
  u_at: { type: Date, default: new Date() },
  deleted: { type: Boolean, default: false },
});

export const TodoModel = model<TodoInterface>("Todo", TodoSchema);
