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

export enum PrimitiveTypes {
  bool = "bool",
  int = "int",
  uint = "uint",
  string = "string",
  address = "address",
  bytes = "bytes",
}
