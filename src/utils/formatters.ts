import { Choice } from "../types";
import { Primitives } from "./constants";

export const primitiveTypesChoices = (): Choice => {
  const primitives = Object.values(Primitives).join(",");
  return `|${primitives}|`;
};
