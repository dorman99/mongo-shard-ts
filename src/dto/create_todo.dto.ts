import { Types } from "mongoose";

export interface CreateTodoDto {
    name: string;
    accountId: Types.ObjectId
}