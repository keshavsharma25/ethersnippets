import { SnippetType } from "../types";
import { choicePlaceholder, tabPlaceholder } from "../utils/constants";
import { primitiveTypesChoices } from "../utils/formatters";

type FunctionMappings = {
  functionReceive: "fr";
  functionFallback: "ff";
  functionPublic: "fpu";
  functionPublicPayable: "fpup";
  functionPublicViewReturns: "fpuvr";
  functionPublicPureReturns: "fpupr";
  functionPrivate: "fpr";
  functionPrivateViewReturns: "fprvr";
  functionPrivatePureReturns: "fprpr";
  functionInternal: "fi";
  functionInternalViewReturns: "fivr";
  functionInternalPureReturns: "fipr";
  functionExternal: "fe";
  functionExternalPayable: "fep";
  functionExternalViewReturns: "fevr";
  functionExternalPureReturns: "fepr";
};

export type FunctionSnippets = SnippetType<FunctionMappings>;

const functionReceive: FunctionSnippets = {
  key: "functionReceive",
  prefix: "fr",
  body: ["receive() external payable {", "", "}"],
  description: "receive function",
  scope: "solidity",
};

const functionFallback: FunctionSnippets = {
  key: "functionFallback",
  prefix: "ff",
  body: ["fallback() external payable {", "", "}"],
  description: "fallback function",
  scope: "solidity",
};

const functionPublic: FunctionSnippets = {
  key: "functionPublic",
  prefix: "fpu",
  body: [`function ${tabPlaceholder(1, "foo")}() public {`, "", "}"],
  description: "function public",
  scope: "solidity",
};

const functionPublicPayable: FunctionSnippets = {
  key: "functionPublicPayable",
  prefix: "fpup",
  body: [
    `function ${tabPlaceholder(1, "functionName")}() public payable {`,
    "",
    `}`,
  ],
  description: "function public payable",
  scope: "solidity",
};

const functionPublicViewReturns: FunctionSnippets = {
  key: "functionPublicViewReturns",
  prefix: "fpuvr",
  body: [
    `function ${tabPlaceholder(
      1,
      "functionName",
    )}() public view returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "function public view returns",
  scope: "solidity",
};

const functionPublicPureReturns: FunctionSnippets = {
  key: "functionPublicPureReturns",
  prefix: "fpupr",
  body: [
    `function ${tabPlaceholder(
      1,
      "functionName",
    )}() public pure returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "function public pure returns",
  scope: "solidity",
};

const functionPrivate: FunctionSnippets = {
  key: "functionPrivate",
  prefix: "fpr",
  body: [`function ${tabPlaceholder(1, "functionName")}() private {`, "", "}"],
  description: "function private",
  scope: "solidity",
};

const functionPrivateViewReturns: FunctionSnippets = {
  key: "functionPrivateViewReturns",
  prefix: "fprvr",
  body: [
    `function ${tabPlaceholder(
      1,
      "functionName",
    )}() private view returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "function private view returns",
  scope: "solidity",
};

const functionPrivatePureReturns: FunctionSnippets = {
  key: "functionPrivatePureReturns",
  prefix: "fprpr",
  body: [
    `function ${tabPlaceholder(
      1,
      "functionName",
    )}() private pure returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "function private pure returns",
  scope: "solidity",
};

const functionInternal: FunctionSnippets = {
  key: "functionInternal",
  prefix: "fi",
  body: [`function ${tabPlaceholder(1, "functionName")}() internal {`, "", "}"],
  description: "function internal",
  scope: "solidity",
};

const functionInternalViewReturns: FunctionSnippets = {
  key: "functionInternalViewReturns",
  prefix: "fivr",
  body: [
    `function ${tabPlaceholder(
      1,
      "functionName",
    )}() internal view returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "function internal view returns",
  scope: "solidity",
};

const functionInternalPureReturns: FunctionSnippets = {
  key: "functionInternalPureReturns",
  prefix: "fipr",
  body: [
    `function ${tabPlaceholder(
      1,
      "functionName",
    )}() internal pure returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "function internal pure returns",
  scope: "solidity",
};

const functionExternal: FunctionSnippets = {
  key: "functionExternal",
  prefix: "fe",
  body: [`function ${tabPlaceholder(1, "functionName")}() external {`, "", "}"],
  description: "function external",
  scope: "solidity",
};

const functionExternalPayable: FunctionSnippets = {
  key: "functionExternalPayable",
  prefix: "fep",
  body: [
    `function ${tabPlaceholder(1, "functionName")}() external payable {`,
    "",
    "}",
  ],
  description: "function external payable",
  scope: "solidity",
};

const functionExternalViewReturns: FunctionSnippets = {
  key: "functionExternalViewReturns",
  prefix: "fevr",
  body: [
    `function ${tabPlaceholder(
      1,
      "functionName",
    )}() external view returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "function external view returns",
  scope: "solidity",
};

const functionExternalPureReturns: FunctionSnippets = {
  key: "functionExternalPureReturns",
  prefix: "fepr",
  body: [
    `function ${tabPlaceholder(
      1,
      "functionName",
    )}() external pure returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "function external pure returns",
  scope: "solidity",
};

export default [
  functionReceive,
  functionFallback,
  functionPublic,
  functionPublicPayable,
  functionPublicViewReturns,
  functionPublicPureReturns,
  functionPrivate,
  functionPrivateViewReturns,
  functionPrivatePureReturns,
  functionInternal,
  functionInternalViewReturns,
  functionInternalPureReturns,
  functionExternal,
  functionExternalPayable,
  functionExternalViewReturns,
  functionExternalPureReturns,
];
