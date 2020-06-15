import TYPES from "./types";

export const setSearchField = (text) => ({
  type: TYPES.CHANGE_SEARCH_FIELD,
  payload: text,
});
