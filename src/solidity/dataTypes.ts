import { SnippetType } from "../types";
import { choicePlaceholder, tabPlaceholder } from "../utils/constants";
import { defaultPlaceholders } from "../utils/constants";
import { primitiveTypesChoices } from "../utils/formatters";

type DataTypesMapping = {
  struct: "strct";
  mapping: "map";
  mappingPublic: "mappu";
  mappingPrivate: "mappr";
  enums: "enum";
};

const { PASCAL_VARIABLE, CAMEL_VARIABLE } = defaultPlaceholders;

export type DataTypesSnippets = SnippetType<DataTypesMapping>;

const struct: DataTypesSnippets = {
  key: "struct",
  prefix: "strct",
  body: [`struct ${tabPlaceholder(1, PASCAL_VARIABLE)} {`, "", "}"],
  description: "struct",
  scope: "solidity",
};

const mapping: DataTypesSnippets = {
  key: "mapping",
  prefix: "map",
  body: [
    `mapping(${choicePlaceholder(
      1,
      primitiveTypesChoices(),
    )} => ${choicePlaceholder(2, primitiveTypesChoices())}) ${tabPlaceholder(
      3,
      CAMEL_VARIABLE,
    )};`,
  ],
  description: "mapping",
  scope: "solidity",
};

const mappingPublic: DataTypesSnippets = {
  key: "mappingPublic",
  prefix: "mappu",
  body: [
    `mapping(${choicePlaceholder(
      1,
      primitiveTypesChoices(),
    )} => ${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) public ${tabPlaceholder(3, CAMEL_VARIABLE)};`,
  ],
  description: "mapping",
  scope: "solidity",
};

const mappingPrivate: DataTypesSnippets = {
  key: "mappingPrivate",
  prefix: "mappr",
  body: [
    `mapping(${choicePlaceholder(
      1,
      primitiveTypesChoices(),
    )} => ${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) private ${tabPlaceholder(3, CAMEL_VARIABLE)};`,
  ],
  description: "mapping",
  scope: "solidity",
};

const enums: DataTypesSnippets = {
  key: "enums",
  prefix: "enum",
  body: [`enum ${tabPlaceholder(1, PASCAL_VARIABLE)} {`, "", "}"],
  description: "enum",
  scope: "solidity",
};

export default [struct, mapping, mappingPublic, mappingPrivate, enums];
