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
  filename: "$TM_FILENAME_BASE",
  clipboard: "$CLIPBOARD",
  blockCommentStart: "$BLOCK_COMMENT_START",
  blockCommentEnd: "$BLOCK_COMMENT_END",
  lineComment: "$LINE_COMMENT",
} as const;
