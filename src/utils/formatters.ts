import { Choice, PrimitiveTypes } from "../types";

export const primitiveTypesChoices = (): Choice => {
  const primitives = Object.values(PrimitiveTypes).join(",");
  return `|${primitives}|`;
};
