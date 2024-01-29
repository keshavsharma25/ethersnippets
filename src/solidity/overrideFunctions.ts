import { SnippetType } from "../types";
import {
  choicePlaceholder,
  defaultPlaceholders,
  tabPlaceholder,
} from "../utils/constants";
import { primitiveTypesChoices } from "../utils/formatters";

type OverrideFunctionsMappings = {
  overrideFunctionPublic: "ofpu";
  overrideFunctionPublicPayable: "ofpup";
  overrideFunctionPublicViewReturns: "ofpuvr";
  overrideFunctionPublicPureReturns: "ofpupr";
  overrideFunctionPrivate: "ofpr";
  overrideFunctionPrivateViewReturns: "ofprvr";
  overrideFunctionPrivatePureReturns: "ofprpr";
  overrideFunctionInternal: "ofi";
  overrideFunctionInternalViewReturns: "ofivr";
  overrideFunctionInternalPureReturns: "ofipr";
  overrideFunctionExternal: "ofe";
  overrideFunctionExternalPayable: "ofep";
  overrideFunctionExternalViewReturns: "ofevr";
  overrideFunctionExternalPureReturns: "ofepr";
};

export type OverrideFunctionsSnippets = SnippetType<OverrideFunctionsMappings>;

const { CAMEL_VARIABLE } = defaultPlaceholders;

const overrideFunctionPublic: OverrideFunctionsSnippets = {
  key: "overrideFunctionPublic",
  prefix: "ofpu",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() public override returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "override public function",
  scope: "solidity",
};

const overrideFunctionPublicPayable: OverrideFunctionsSnippets = {
  key: "overrideFunctionPublicPayable",
  prefix: "ofpup",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() public payable override returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "override public payable function",
  scope: "solidity",
};

const overrideFunctionPublicViewReturns: OverrideFunctionsSnippets = {
  key: "overrideFunctionPublicViewReturns",
  prefix: "ofpuvr",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() public view override returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "override public view returns function",
  scope: "solidity",
};

const overrideFunctionPublicPureReturns: OverrideFunctionsSnippets = {
  key: "overrideFunctionPublicPureReturns",
  prefix: "ofpupr",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() public pure override returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "override public pure returns function",
  scope: "solidity",
};

const overrideFunctionPrivate: OverrideFunctionsSnippets = {
  key: "overrideFunctionPrivate",
  prefix: "ofpr",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() private override returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "override private function",
  scope: "solidity",
};

const overrideFunctionPrivateViewReturns: OverrideFunctionsSnippets = {
  key: "overrideFunctionPrivateViewReturns",
  prefix: "ofprvr",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() private view override returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "override private view returns function",
  scope: "solidity",
};

const overrideFunctionPrivatePureReturns: OverrideFunctionsSnippets = {
  key: "overrideFunctionPrivatePureReturns",
  prefix: "ofprpr",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() private pure override returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "override private pure returns function",
  scope: "solidity",
};

const overrideFunctionInternal: OverrideFunctionsSnippets = {
  key: "overrideFunctionInternal",
  prefix: "ofi",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() internal override returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "override internal function",
  scope: "solidity",
};

const overrideFunctionInternalViewReturns: OverrideFunctionsSnippets = {
  key: "overrideFunctionInternalViewReturns",
  prefix: "ofivr",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() internal view override returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "override internal view returns function",
  scope: "solidity",
};

const overrideFunctionInternalPureReturns: OverrideFunctionsSnippets = {
  key: "overrideFunctionInternalPureReturns",
  prefix: "ofipr",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() internal pure override returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "override internal pure returns function",
  scope: "solidity",
};

const overrideFunctionExternal: OverrideFunctionsSnippets = {
  key: "overrideFunctionExternal",
  prefix: "ofe",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() external override returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "override external function",
  scope: "solidity",
};

const overrideFunctionExternalPureReturns: OverrideFunctionsSnippets = {
  key: "overrideFunctionExternalPureReturns",
  prefix: "ofepr",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() external pure override returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "override external pure returns function",
  scope: "solidity",
};

const overrideFunctionExternalViewReturns: OverrideFunctionsSnippets = {
  key: "overrideFunctionExternalViewReturns",
  prefix: "ofevr",
  body: [
    `function ${tabPlaceholder(
      1,
      CAMEL_VARIABLE,
    )}() external view override returns (${choicePlaceholder(
      2,
      primitiveTypesChoices(),
    )}) {`,
    "",
    "}",
  ],
  description: "override external view returns function",
  scope: "solidity",
};

export default [
  overrideFunctionPublic,
  overrideFunctionPublicPayable,
  overrideFunctionPublicViewReturns,
  overrideFunctionPublicPureReturns,
  overrideFunctionPrivate,
  overrideFunctionPrivateViewReturns,
  overrideFunctionPrivatePureReturns,
  overrideFunctionInternal,
  overrideFunctionInternalPureReturns,
  overrideFunctionInternalViewReturns,
  overrideFunctionExternal,
  overrideFunctionExternalPureReturns,
  overrideFunctionExternalViewReturns,
];
