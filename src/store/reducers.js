import { combineReducers } from "redux";

import TYPES from "./types";

const INITIAL_STATE = {
  searchField: "",
  robotsList: [],
  isPending: false,
  error: null,
};

export const robots = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    case TYPES.REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case TYPES.REQUEST_ROBOTS_SUCCESS:
      return { ...state, isPending: false, robotsList: action.payload };
    case TYPES.REQUEST_ROBOTS_FAILED:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  robots,
});
