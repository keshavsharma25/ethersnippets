import { writeFileSync } from "fs";
import functionSnippets, { FunctionSnippets } from "../solidity/functions";
import errorSnippets, { ErrorSnippets } from "../solidity/errors";

export type SnippetKeys = FunctionSnippets["key"] | ErrorSnippets["key"];

export type Snippet = FunctionSnippets | ErrorSnippets;

export type Snippets = {
  [key in SnippetKeys]: Snippet;
};

const getSoliditySnippets = () => {
  const snippets = [...functionSnippets, ...errorSnippets].reduce(
    (acc, snippet) => ({
      ...acc,
      [snippet.key]: snippet,
    }),
    {} as Snippets,
  );

  return snippets;
};

// const getVyperSnippets = () => {};

export const genSnippets = async () => {
  const soliditySnippets = getSoliditySnippets();
  // const vyperSnippets = getVyperSnippets();

  try {
    writeFileSync(
      "./snippets/generatedSoliditySnippets.json",
      JSON.stringify(soliditySnippets, null, "\t"),
      {
        encoding: "utf-8",
      },
    );
    // writeFileSync(
    //   "./snippets/generatedVyperSnippets.json",
    //   JSON.stringify(vyperSnippets, null, "\t"),
    //   {
    //     encoding: "utf-8",
    //   },
    // );
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};

genSnippets().then(() => {
  console.log("Generated snippets!");
});
