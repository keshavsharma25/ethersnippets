export type SnippetType<T> = {
  key: keyof T;
  prefix: T[keyof T];
  body: string[];
  description: string;
  scope: "solidity" | "vyper";
};

export type Choice = `|${string}|`;

export type ChoiceType<
  P extends number,
  V extends Choice,
> = `${"${"}${P}${V}${"}"}`;

export type PlaceholderType<
  P extends number,
  V extends string,
> = `${"${"}${P}: ${V}${"}"}`;

// Licence Response Type of response from https://raw.githubusercontent.com/spdx/license-list-data/main/json/licenses.json
export type LicenseResType = {
  licenseListVersion: string;
  licenses: License[];
  releaseDate: string;
};

export type License = {
  reference: string;
  isDeprecatedLicenseId: boolean;
  detailsUrl: string;
  referenceNumber: number;
  name: string;
  licenseId: string;
  seeAlso: string[];
  isOsiApproved: boolean;
  isFsfLibre?: boolean;
};

export type SolVersionResType = {
  tag_name: string;
};
