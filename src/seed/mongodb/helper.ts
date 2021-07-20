import { AccountInterface, TodoInterface } from "../../interface";
import { getObjectId } from "mongo-seeding";
export const generateAccountSeed = (
  name: string = "John Doe",
  c_at: Date = new Date(),
  u_at: Date = new Date(),
  deleted: boolean = false
): AccountInterface => {
  return {
    _id: getObjectId(name),
    name: name,
    c_at: c_at,
    u_at: u_at,
    deleted: deleted,
  } as AccountInterface;
};

export const generateTodoSeed = (
    name: string = "code", 
    isDone: boolean = false,
    deleted: boolean = false, 
    accountId = getObjectId("John Doe")
): TodoInterface => {
    return {
        _id: getObjectId(name),
        name: name,
        accountId: accountId, 
        isDone: isDone,
        deleted: deleted, 
        c_at: new Date(),
        u_at: new Date()
    } as TodoInterface
}
