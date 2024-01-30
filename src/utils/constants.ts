import { Choice, ChoiceType, PlaceholderType } from "../types";

export const tabPlaceholder = (place: number, value: string) => {
  return ("${" + place + ":" + value + "}") as PlaceholderType<
    typeof place,
    typeof value
  >;
};

export const choicePlaceholder = (place: number, value: Choice) => {
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
