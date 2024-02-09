import { SnippetType } from "../types";
import { choicePlaceholder } from "../utils/constants";
import { licenseIdChoices, solidityVersionChoices } from "../utils/formatters";

type NatspecMappings = {
  spdxLicenseIdentifier: "spdx";
  pragmaSolidityVersion: "prgm";
  contractSpec: "nsc";
  interfaceSpec: "nsi";
  librarySpec: "nsl";
  functionSpec: "nsf";
  modifierSpec: "nsm";
  eventSpec: "nse";
};

export type NatspecSnippets = SnippetType<NatspecMappings>;

const spdxLicenseIdentifier: NatspecSnippets = {
  key: "spdxLicenseIdentifier",
  prefix: "spdx",
  body: [
    `// SPDX-License-Identifier: ${choicePlaceholder(1, licenseIdChoices())}`,
  ],
  description: "SPDX license identifier",
  scope: "solidity",
};

const pragmaSolidityVersion: NatspecSnippets = {
  key: "pragmaSolidityVersion",
  prefix: "prgm",
  body: [`pragma solidity ${choicePlaceholder(1, solidityVersionChoices())};`],
  description: "Solidity version pragma",
  scope: "solidity",
};

export default [spdxLicenseIdentifier, pragmaSolidityVersion];
