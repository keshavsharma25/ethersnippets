import { SnippetType } from "../types";
import { tabPlaceholder } from "../utils/constants";

type ErrorMapping = {
  error: "err";
};

export type ErrorSnippets = SnippetType<ErrorMapping>;

const error: ErrorSnippets = {
  key: "error",
  prefix: "err",
  body: [`error ${tabPlaceholder(1, "ErrorReason")}();`],
  description: "error",
  scope: "solidity",
};

export default [error];
