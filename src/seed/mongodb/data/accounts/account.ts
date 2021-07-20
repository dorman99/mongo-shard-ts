import { generateAccountSeed } from "../../helper";

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

export = names.map((n) => generateAccountSeed(n));
