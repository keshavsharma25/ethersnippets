import { SnippetType } from "../types";
import {
  choicePlaceholder,
  defaultPlaceholders,
  tabPlaceholder,
} from "../utils/constants";
import { primitiveTypesChoices } from "../utils/formatters";

type VirtualOverrideFunctionsMappings = {
  virtualOverrideFunctionPublic: "vofpu";
  virtualOverrideFunctionPublicPayable: "vofpup";
  virtualOverrideFunctionPublicViewReturns: "vofpuvr";
  virtualOverrideFunctionPublicPureReturns: "vofpupr";
  virtualOverrideFunctionPrivate: "vofpr";
  virtualOverrideFunctionPrivateViewReturns: "vofprvr";
  virtualOverrideFunctionPrivatePureReturns: "vofprpr";
  virtualOverrideFunctionInternal: "vofi";
  virtualOverrideFunctionInternalViewReturns: "vofivr";
  virtualOverrideFunctionInternalPureReturns: "vofipr";
  virtualOverrideFunctionExternal: "vofe";
  virtualOverrideFunctionExternalPayable: "vofep";
  virtualOverrideFunctionExternalViewReturns: "vofevr";
  virtualOverrideFunctionExternalPureReturns: "vofepr";
};

const { CAMEL_VARIABLE } = defaultPlaceholders;

export type VirtualOverrideFunctionsSnippets =
  SnippetType<VirtualOverrideFunctionsMappings>;

const virtualOverrideFunctionPublic: VirtualOverrideFunctionsSnippets = {
  key: "virtualOverrideFunctionPublic",
  prefix: "vofpu",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() public virtual override returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "virtual override public function",
  scope: "solidity",
};

const virtualOverrideFunctionPublicPayable: VirtualOverrideFunctionsSnippets = {
  key: "virtualOverrideFunctionPublicPayable",
  prefix: "vofpup",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() public payable virtual override returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "virtual override public payable function",
  scope: "solidity",
};

const virtualOverrideFunctionPublicPureReturns: VirtualOverrideFunctionsSnippets =
  {
    key: "virtualOverrideFunctionPublicPureReturns",
    prefix: "vofpupr",
    body: [
      `function ${tabPlaceholder(
        1,
        CAMEL_VARIABLE,
      )}() public pure virtual override returns (${choicePlaceholder(
        2,
        primitiveTypesChoices(),
      )}) {`,
      "",
      "}",
    ],
    description: "virtual override public pure returns function",
    scope: "solidity",
  };

const virtualOverrideFunctionPublicViewReturns: VirtualOverrideFunctionsSnippets =
  {
    key: "virtualOverrideFunctionPublicViewReturns",
    prefix: "vofpuvr",
    body: [
      `function ${tabPlaceholder(
        1,
        CAMEL_VARIABLE,
      )}() public view virtual override returns (${choicePlaceholder(
        2,
        primitiveTypesChoices(),
      )}) {`,
      "",
      "}",
    ],
    description: "virtual override public view returns function",
    scope: "solidity",
  };

const virtualOverrideFunctionPrivate: VirtualOverrideFunctionsSnippets = {
  key: "virtualOverrideFunctionPrivate",
  prefix: "vofpr",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() private virtual override returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "virtual override private function",
  scope: "solidity",
};

const virtualOverrideFunctionPrivateViewReturns: VirtualOverrideFunctionsSnippets =
  {
    key: "virtualOverrideFunctionPrivateViewReturns",
    prefix: "vofprvr",
    body: [
      `function ${tabPlaceholder(
        1,
        CAMEL_VARIABLE,
      )}() private view virtual override returns (${choicePlaceholder(
        2,
        primitiveTypesChoices(),
      )}) {`,
      "",
      "}",
    ],
    description: "virtual override private view returns function",
    scope: "solidity",
  };

const virtualOverrideFunctionPrivatePureReturns: VirtualOverrideFunctionsSnippets =
  {
    key: "virtualOverrideFunctionPrivatePureReturns",
    prefix: "vofprpr",
    body: [
      `function ${tabPlaceholder(
        1,
        CAMEL_VARIABLE,
      )}() private pure virtual override returns (${choicePlaceholder(
        2,
        primitiveTypesChoices(),
      )}) {`,
      "",
      "}",
    ],
    description: "virtual override private pure returns function",
    scope: "solidity",
  };

const virtualOverrideFunctionInternal: VirtualOverrideFunctionsSnippets = {
  key: "virtualOverrideFunctionInternal",
  prefix: "vofi",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() internal virtual override returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "virtual override internal function",
  scope: "solidity",
};

const virtualOverrideFunctionInternalViewReturns: VirtualOverrideFunctionsSnippets =
  {
    key: "virtualOverrideFunctionInternalViewReturns",
    prefix: "vofivr",
    body: [
      `function ${tabPlaceholder(
        1,
        CAMEL_VARIABLE,
      )}() internal view virtual override returns (${choicePlaceholder(
        2,
        primitiveTypesChoices(),
      )}) {`,
      "",
      "}",
    ],
    description: "virtual override internal view returns function",
    scope: "solidity",
  };

const virtualOverrideFunctionInternalPureReturns: VirtualOverrideFunctionsSnippets =
  {
    key: "virtualOverrideFunctionInternalPureReturns",
    prefix: "vofipr",
    body: [
      `function ${tabPlaceholder(
        1,
        CAMEL_VARIABLE,
      )}() internal pure virtual override returns (${choicePlaceholder(
        2,
        primitiveTypesChoices(),
      )}) {`,
      "",
      "}",
    ],
    description: "virtual override internal pure returns function",
    scope: "solidity",
  };

const virtualOverrideFunctionExternal: VirtualOverrideFunctionsSnippets = {
  key: "virtualOverrideFunctionExternal",
  prefix: "vofe",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() external virtual override returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "virtual override external function",
  scope: "solidity",
};

const virtualOverrideFunctionExternalPayable: VirtualOverrideFunctionsSnippets =
  {
    key: "virtualOverrideFunctionExternalPayable",
    prefix: "vofep",
    body: [
      `function ${tabPlaceholder(
        1,
        CAMEL_VARIABLE,
      )}() external payable virtual override returns (${choicePlaceholder(
        2,
        primitiveTypesChoices(),
      )}) {`,
      "",
      "}",
    ],
    description: "virtual override external payable function",
    scope: "solidity",
  };

const virtualOverrideFunctionExternalViewReturns: VirtualOverrideFunctionsSnippets =
  {
    key: "virtualOverrideFunctionExternalViewReturns",
    prefix: "vofevr",
    body: [
      `function ${tabPlaceholder(
        1,
        CAMEL_VARIABLE,
      )}() external view virtual override returns (${choicePlaceholder(
        2,
        primitiveTypesChoices(),
      )}) {`,
      "",
      "}",
    ],
    description: "virtual override external view returns function",
    scope: "solidity",
  };

const virtualOverrideFunctionExternalPureReturns: VirtualOverrideFunctionsSnippets =
  {
    key: "virtualOverrideFunctionExternalPureReturns",
    prefix: "vofepr",
    body: [
      `function ${tabPlaceholder(
        1,
        CAMEL_VARIABLE,
      )}() external pure virtual override returns (${choicePlaceholder(
        2,
        primitiveTypesChoices(),
      )}) {`,
      "",
      "}",
    ],
    description: "virtual override external pure returns function",
    scope: "solidity",
  };

export default [
  virtualOverrideFunctionPublic,
  virtualOverrideFunctionPublicPayable,
  virtualOverrideFunctionPublicViewReturns,
  virtualOverrideFunctionPublicPureReturns,
  virtualOverrideFunctionPrivate,
  virtualOverrideFunctionPrivateViewReturns,
  virtualOverrideFunctionPrivatePureReturns,
  virtualOverrideFunctionInternal,
  virtualOverrideFunctionInternalViewReturns,
  virtualOverrideFunctionInternalPureReturns,
  virtualOverrideFunctionExternal,
  virtualOverrideFunctionExternalPayable,
  virtualOverrideFunctionExternalPureReturns,
  virtualOverrideFunctionExternalViewReturns,
];
