import { SnippetType } from "../types";
import {
  choicePlaceholder,
  defaultPlaceholders,
  tabPlaceholder,
} from "../utils/constants";
import { primitiveTypesChoices } from "../utils/formatters";

type VirtualFunctionsMapping = {
  virtualFunctionPublic: "vfpu";
  virtualFunctionPublicPayable: "vfpup";
  virtualFunctionPublicViewReturns: "vfpuvr";
  virtualFunctionPublicPureReturns: "vfpupr";
  virtualFunctionPrivate: "vfpr";
  virtualFunctionPrivateViewReturns: "vfprvr";
  virtualFunctionPrivatePureReturns: "vfprpr";
  virtualFunctionInternal: "vfi";
  virtualFunctionInternalViewReturns: "vfivr";
  virtualFunctionInternalPureReturns: "vfipr";
  virtualFunctionExternal: "vfe";
  virtualFunctionExternalPayable: "vfep";
  virtualFunctionExternalViewReturns: "vfevr";
  virtualFunctionExternalPureReturns: "vfepr";
};

const { CAMEL_VARIABLE } = defaultPlaceholders;

export type VirtualFunctionsSnippets = SnippetType<VirtualFunctionsMapping>;

const virtualFunctionPublic: VirtualFunctionsSnippets = {
  key: "virtualFunctionPublic",
  prefix: "vfpu",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() public virtual returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "virtual public function",
  scope: "solidity",
};

const virtualFunctionPublicPayable: VirtualFunctionsSnippets = {
  key: "virtualFunctionPublicPayable",
  prefix: "vfpup",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() public payable virtual returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "virtual public payable function",
  scope: "solidity",
};

const virtualFunctionPublicViewReturns: VirtualFunctionsSnippets = {
  key: "virtualFunctionPublicViewReturns",
  prefix: "vfpuvr",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() public view virtual returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "virtual public view returns function",
  scope: "solidity",
};

const virtualFunctionPublicPureReturns: VirtualFunctionsSnippets = {
  key: "virtualFunctionPublicPureReturns",
  prefix: "vfpupr",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() public pure virtual returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "virtual public pure returns function",
  scope: "solidity",
};

const virtualFunctionPrivate: VirtualFunctionsSnippets = {
  key: "virtualFunctionPrivate",
  prefix: "vfpr",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() private virtual returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "virtual private function",
  scope: "solidity",
};

const virtualFunctionPrivateViewReturns: VirtualFunctionsSnippets = {
  key: "virtualFunctionPrivateViewReturns",
  prefix: "vfprvr",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() private view virtual returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "virtual private view returns function",
  scope: "solidity",
};

const virtualFunctionPrivatePureReturns: VirtualFunctionsSnippets = {
  key: "virtualFunctionPrivatePureReturns",
  prefix: "vfprpr",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() private pure virtual returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "virtual private pure returns function",
  scope: "solidity",
};

const virtualFunctionInternal: VirtualFunctionsSnippets = {
  key: "virtualFunctionInternal",
  prefix: "vfi",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() internal virtual returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "virtual internal function",
  scope: "solidity",
};

const virtualFunctionInternalViewReturns: VirtualFunctionsSnippets = {
  key: "virtualFunctionInternalViewReturns",
  prefix: "vfivr",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() internal view virtual returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "virtual internal view returns function",
  scope: "solidity",
};

const virtualFunctionInternalPureReturns: VirtualFunctionsSnippets = {
  key: "virtualFunctionInternalPureReturns",
  prefix: "vfipr",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() internal pure virtual returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "virtual internal pure returns function",
  scope: "solidity",
};

const virtualFunctionExternal: VirtualFunctionsSnippets = {
  key: "virtualFunctionExternal",
  prefix: "vfe",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() external virtual returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "virtual external function",
  scope: "solidity",
};

const virtualFunctionExternalPayable: VirtualFunctionsSnippets = {
  key: "virtualFunctionExternalPayable",
  prefix: "vfep",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() external payable virtual returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "virtual external payable function",
  scope: "solidity",
};

const virtualFunctionExternalViewReturns: VirtualFunctionsSnippets = {
  key: "virtualFunctionExternalViewReturns",
  prefix: "vfevr",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() external view virtual returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "virtual external view returns function",
  scope: "solidity",
};

const virtualFunctionExternalPureReturns: VirtualFunctionsSnippets = {
  key: "virtualFunctionExternalPureReturns",
  prefix: "vfepr",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() external pure virtual returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "virtual external pure returns function",
  scope: "solidity",
};

export default [
  virtualFunctionPublic,
  virtualFunctionPublicPayable,
  virtualFunctionPublicViewReturns,
  virtualFunctionPublicPureReturns,
  virtualFunctionPrivate,
  virtualFunctionPrivateViewReturns,
  virtualFunctionPrivatePureReturns,
  virtualFunctionInternal,
  virtualFunctionInternalViewReturns,
  virtualFunctionInternalPureReturns,
  virtualFunctionExternal,
  virtualFunctionExternalPayable,
  virtualFunctionExternalViewReturns,
  virtualFunctionExternalPureReturns,
];
