import axios from "axios";
import TYPES from "./types";

export const setSearchField = (text) => ({
  type: TYPES.CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = () => async (dispatch) => {
  dispatch({ type: TYPES.REQUEST_ROBOTS_PENDING });

  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({ type: TYPES.REQUEST_ROBOTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TYPES.REQUEST_ROBOTS_FAILED, payload: error });
  }
};
