import { writeFileSync } from "fs";
import { getSoliditySnippets } from "../solidity";

export const genSnippets = async () => {
  const soliditySnippets = getSoliditySnippets();
  // const vyperSnippets = getVyperSnippets();

  try {
    writeFileSync(
      "./snippets/genSolSnippets.json",
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
