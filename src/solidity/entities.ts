import { SnippetType } from "../types";
import { tabPlaceholder } from "../utils/constants";
import { defaultPlaceholders } from "../utils/constants";

type EntitiesMapping = {
  abstractContract: "act";
  contract: "ct";
  library: "lib";
  interfaceSol: "ifce";
};

export type EntitiesSnippets = SnippetType<EntitiesMapping>;

const { PASCAL_VARIABLE } = defaultPlaceholders;

const abstractContract: EntitiesSnippets = {
  key: "abstractContract",
  prefix: "act",
  body: [`abstract contract ${tabPlaceholder(1, PASCAL_VARIABLE)} {`, "", "}"],
  description: "abstract contract",
  scope: "solidity",
};

const contract: EntitiesSnippets = {
  key: "contract",
  prefix: "ct",
  body: [`contract ${tabPlaceholder(1, PASCAL_VARIABLE)} {`, "", "}"],
  description: "contract",
  scope: "solidity",
};

const library: EntitiesSnippets = {
  key: "library",
  prefix: "lib",
  body: [`library ${tabPlaceholder(1, PASCAL_VARIABLE)} {`, "", "}"],
  description: "library",
  scope: "solidity",
};

const interfaceSol: EntitiesSnippets = {
  key: "interfaceSol",
  prefix: "ifce",
  body: [`interface ${tabPlaceholder(1, PASCAL_VARIABLE)} {`, "", "}"],
  description: "interface",
  scope: "solidity",
};

export default [abstractContract, contract, library, interfaceSol];
