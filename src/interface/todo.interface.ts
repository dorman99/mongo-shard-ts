import { Types, Document } from "mongoose";

export interface TodoInterface extends Document {
    name: string;
    c_at: string;
    u_at: string;
    accountId: Types.ObjectId;
    isDone: boolean;
    deleted: boolean;
}