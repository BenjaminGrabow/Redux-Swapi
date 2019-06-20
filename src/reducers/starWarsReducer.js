import * as types from "../actions";
const initialState = {
  characters: [],
  loading: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case types.FETCHING:
      return {characters: [], error: null, loading: true}

    case types.SUCCESS:
      return {loading: false, error: null, characters: action.payload}

    case types.ERROR:
      return {characters: [], laoding: false, error: action.payload}
    default:
      return state;
  }
};
