import { ExtensionContext, workspace, window, commands } from "vscode";
import type { ConfigurationChangeEvent } from "vscode";
import { genSnippets } from "./utils/genSnippet";
import soliditySnippets from "../snippets/generatedSoliditySnippets.json";

export const activate = async (context: ExtensionContext) => {
  workspace.onDidChangeConfiguration(
    async ({ affectsConfiguration }: ConfigurationChangeEvent) => {
      if (affectsConfiguration("ethersnippets")) {
        await genSnippets();
        setTimeout(async () => {
          const action = await window.showWarningMessage(
            "EtherSnippets: Please restart VS Code to apply snippets changes!",
            "Restart VS Code",
            "Ignore",
          );

          if (action === "Restart VS Code") {
            window.showInformationMessage(
              "EtherSnippets: Restarting VS Code...",
            );
            commands.executeCommand("workbench.action.reloadWindow");
          }
        }, 1000);
      }
    },
  );

  if (JSON.stringify(soliditySnippets).length < 10) {
    await genSnippets();
  }

  const getSoliditySnippets = commands.registerCommand(
    "ethersnippets.getSoliditySnippets",
    async () => {
      await window.showInformationMessage("This is an information message");
    },
  );

  context.subscriptions.push(getSoliditySnippets);
};

export const deactivate = () => {};
