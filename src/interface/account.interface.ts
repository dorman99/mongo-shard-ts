import { Document } from "mongoose";
export interface AccountInterface extends Document {
  name: string;
  c_at: Date;
  u_at: Date;
  deleted: boolean;
}
