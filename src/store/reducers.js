import { combineReducers } from "redux";

import TYPES from "./types";

const INITIAL_STATE = {
  searchField: "",
};

export const searchRobots = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  searchRobots,
});
