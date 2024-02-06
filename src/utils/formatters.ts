import { licenseIds, solidityVersions } from "../generated";
import { Choice } from "../types";
import { Primitives } from "./constants";

export const primitiveTypesChoices = (): Choice => {
  const primitives = Object.values(Primitives).join(",");
  return `|${primitives}|`;
};

// gen licenseIdChoices where ids which comes from generated/index.ts
export const licenseIdChoices = (): Choice | null => {
  const ids = Object.values(licenseIds);
  if (ids.length === 0) {
    return null;
  }

  const licenseIdsStr = ids.join(",");
  return `|${licenseIdsStr}|`;
};

// generates solidityVersionChoices where versions comes from generated/index.ts
export const solidityVersionChoices = (): Choice | null => {
  const vers = Object.values(solidityVersions);
  if (vers.length === 0) {
    return null;
  }

  const versionsStr = vers.join(",");
  return `|${versionsStr}|`;
};
