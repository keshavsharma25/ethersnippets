import { SnippetType } from "../types";
import { defaultPlaceholders, tabPlaceholder } from "../utils/constants";

type ModifierMapping = {
  preModifier: "modpr";
  postModifier: "modpo";
};

export type ModifierSnippets = SnippetType<ModifierMapping>;

const { FINAL_CURSOR, PASCAL_VARIABLE } = defaultPlaceholders;

const preModifier: ModifierSnippets = {
  key: "preModifier",
  prefix: "modpr",
  body: [
    `modifier ${tabPlaceholder(1, PASCAL_VARIABLE)}() {`,
    FINAL_CURSOR,
    "_;",
    "}",
  ],
  description: "pre modifier",
  scope: "solidity",
};

const postModifier: ModifierSnippets = {
  key: "postModifier",
  prefix: "modpo",
  body: [
    `modifier ${tabPlaceholder(1, PASCAL_VARIABLE)}() {`,
    "_;",
    FINAL_CURSOR,
    "}",
  ],
  description: "post modifier",
  scope: "solidity",
};

export default [preModifier, postModifier];
