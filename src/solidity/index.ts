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

export type SnippetKeys =
  | FunctionSnippets["key"]
  | VirtualFunctionsSnippets["key"]
  | OverrideFunctionsSnippets["key"]
  | VirtualOverrideFunctionsSnippets["key"]
  | EntitiesSnippets["key"]
  | ErrorSnippets["key"];

export type Snippet =
  | FunctionSnippets
  | VirtualFunctionsSnippets
  | OverrideFunctionsSnippets
  | VirtualOverrideFunctionsSnippets
  | EntitiesSnippets
  | ErrorSnippets;

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
  ].reduce(
    (acc, snippet) => ({
      ...acc,
      [snippet.key]: snippet,
    }),
    {} as Snippets,
  );

  return snippets;
};
