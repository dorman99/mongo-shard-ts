import { Types, Document } from "mongoose";

export interface TodoInterface extends Document {
    name: string;
    c_at: Date;
    u_at: Date;
    accountId: Types.ObjectId;
    isDone: boolean;
    deleted: boolean;
}