import { SnippetType } from "../types";
import { tabPlaceholder } from "../utils/constants";
import { defaultPlaceholders } from "../utils/constants";

type EventsMapping = {
  event: "et";
  eventIndexed: "eti";
};

export type EventsSnippets = SnippetType<EventsMapping>;

const { FINAL_CURSOR } = defaultPlaceholders;

const event: EventsSnippets = {
  key: "event",
  prefix: "et",
  body: [`event ${tabPlaceholder(1, "EventName")}(${FINAL_CURSOR});`],
  description: "event",
  scope: "solidity",
};

const eventIndexed: EventsSnippets = {
  key: "eventIndexed",
  prefix: "eti",
  body: [`event ${tabPlaceholder(1, "EventName")}(indexed ${FINAL_CURSOR});`],
  description: "event",
  scope: "solidity",
};

export default [event, eventIndexed];
