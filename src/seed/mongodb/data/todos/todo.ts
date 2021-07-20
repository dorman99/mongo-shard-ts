import { getObjectId } from "mongo-seeding";
import { generateTodoSeed } from "../../helper";

const names = [
  "John Doe",
  "Lorei",
  "Gilfoyle",
  "Dinesh",
  "Ricard",
  "Galvin",
  "Laurie",
  "Monica",
  "Elrich",
];

const todos = [
  "code",
  "sleep",
  "watch",
  "learn",
  "smile",
  "shit",
  "stare",
  "listening a song",
];

export = todos.map((t) => {
  const name = names[Math.floor(Math.random() * names.length)];
  const accountId = getObjectId(name);
  const td = generateTodoSeed(t, false, false, accountId);
  return td;
});
