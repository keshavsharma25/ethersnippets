import functionSnippets, { FunctionSnippets } from "./functions";
import overrideFunctionsSnippets, {
  OverrideFunctionsSnippets,
} from "./overrideFunctions";
import virtualOverrideFunctions, {
  VirtualOverrideFunctionsSnippets,
} from "./virtualOverrideFunctions";
import virtualFunctions, { VirtualFunctionsSnippets } from "./virtualFunctions";
import errorSnippets, { ErrorSnippets } from "./errors";
import entitiesSnippets, { EntitiesSnippets } from "./entities";
import dataTypesSnippets, { DataTypesSnippets } from "./dataTypes";
import eventsSnippets, { EventsSnippets } from "./events";
import modifierSnippets, { ModifierSnippets } from "./modifiers";
import natspecSnippets, { NatspecSnippets } from "./natspec";

export type SnippetKeys =
  | FunctionSnippets["key"]
  | VirtualFunctionsSnippets["key"]
  | OverrideFunctionsSnippets["key"]
  | VirtualOverrideFunctionsSnippets["key"]
  | EntitiesSnippets["key"]
  | ErrorSnippets["key"]
  | DataTypesSnippets["key"]
  | EventsSnippets["key"]
  | ModifierSnippets["key"]
  | NatspecSnippets["key"];

export type Snippet =
  | FunctionSnippets
  | VirtualFunctionsSnippets
  | OverrideFunctionsSnippets
  | VirtualOverrideFunctionsSnippets
  | EntitiesSnippets
  | ErrorSnippets
  | DataTypesSnippets
  | EventsSnippets
  | ModifierSnippets
  | NatspecSnippets;

export type Snippets = {
  [key in SnippetKeys]: Snippet;
};

export const getSoliditySnippets = () => {
  const snippets = [
    ...functionSnippets,
    ...virtualFunctions,
    ...overrideFunctionsSnippets,
    ...virtualOverrideFunctions,
    ...entitiesSnippets,
    ...errorSnippets,
    ...dataTypesSnippets,
    ...eventsSnippets,
    ...modifierSnippets,
    ...natspecSnippets,
  ].reduce(
    (acc, snippet) => ({
      ...acc,
      [snippet.key]: snippet,
    }),
    {} as Snippets,
  );

  return snippets;
};
