import { AccountInterface } from "../interface";
import { Schema, model } from "mongoose";

export const AccountSchema = new Schema<AccountInterface>({
  name: { type: String, required: true },
  c_at: { type: Date, default: new Date() },
  u_at: { type: Date, default: new Date() },
  deleted: { type: Boolean, default: false },
});

export const AccountModel = model<AccountInterface>("Account", AccountSchema);
