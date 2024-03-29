import { Choice, ChoiceType, PlaceholderType } from "../types";

export const SPDX_LICENSE_URL =
  "https://raw.githubusercontent.com/spdx/license-list-data/main/json/licenses.json";

export const SOLIDITY_VERSION_URL =
  "https://api.github.com/repos/ethereum/solidity/releases";

export const tabPlaceholder = (place: number, value: string) => {
  return ("${" + place + ":" + value + "}") as PlaceholderType<
    typeof place,
    typeof value
  >;
};

export const choicePlaceholder = (place: number, value: Choice | null) => {
  if (!value) {
    return `${place}`;
  }

  return ("${" + place + value + "}") as ChoiceType<typeof place, typeof value>;
};

export const defaultPlaceholders = {
  FINAL_CURSOR: "$0",
  FILENAME: "$TM_FILENAME_BASE",
  CLIPBOARD: "$CLIPBOARD",
  BLOCK_COMMENT_START: "$BLOCK_COMMENT_START",
  BLOCK_COMMENT_END: "$BLOCK_COMMENT_END",
  LINE_COMMENT: "$LINE_COMMENT",
  CAMEL_VARIABLE: "fooBar",
  PASCAL_VARIABLE: "FooBar",
} as const;

export const Primitives = {
  bool: "bool",
  string: "string",
  address: "address",
  int: "int",
  int8: "int8",
  int16: "int16",
  int24: "int24",
  int32: "int32",
  int40: "int40",
  int48: "int48",
  int56: "int56",
  int64: "int64",
  int72: "int72",
  int80: "int80",
  int88: "int88",
  int96: "int96",
  int104: "int104",
  int112: "int112",
  int120: "int120",
  int128: "int128",
  int136: "int136",
  int144: "int144",
  int152: "int152",
  int160: "int160",
  int168: "int168",
  int176: "int176",
  int184: "int184",
  int192: "int192",
  int200: "int200",
  int208: "int208",
  int216: "int216",
  int224: "int224",
  int232: "int232",
  int240: "int240",
  int248: "int248",
  int256: "int256",
  uint8: "uint8",
  uint16: "uint16",
  uint24: "uint24",
  uint32: "uint32",
  uint40: "uint40",
  uint48: "uint48",
  uint56: "uint56",
  uint64: "uint64",
  uint72: "uint72",
  uint80: "uint80",
  uint88: "uint88",
  uint96: "uint96",
  uint104: "uint104",
  uint112: "uint112",
  uint120: "uint120",
  uint128: "uint128",
  uint136: "uint136",
  uint144: "uint144",
  uint152: "uint152",
  uint160: "uint160",
  uint168: "uint168",
  uint176: "uint176",
  uint184: "uint184",
  uint192: "uint192",
  uint200: "uint200",
  uint208: "uint208",
  uint216: "uint216",
  uint224: "uint224",
  uint232: "uint232",
  uint240: "uint240",
  uint248: "uint248",
  uint256: "uint256",
  bytes: "bytes",
  bytes1: "bytes1",
  bytes2: "bytes2",
  bytes3: "bytes3",
  bytes4: "bytes4",
  bytes5: "bytes5",
  bytes6: "bytes6",
  bytes7: "bytes7",
  bytes8: "bytes8",
  bytes9: "bytes9",
  bytes10: "bytes10",
  bytes11: "bytes11",
  bytes12: "bytes12",
  bytes13: "bytes13",
  bytes14: "bytes14",
  bytes15: "bytes15",
  bytes16: "bytes16",
  bytes17: "bytes17",
  bytes18: "bytes18",
  bytes19: "bytes19",
  bytes20: "bytes20",
  bytes21: "bytes21",
  bytes22: "bytes22",
  bytes23: "bytes23",
  bytes24: "bytes24",
  bytes25: "bytes25",
  bytes26: "bytes26",
  bytes27: "bytes27",
  bytes28: "bytes28",
  bytes29: "bytes29",
  bytes30: "bytes30",
  bytes31: "bytes31",
  bytes32: "bytes32",
} as const;
