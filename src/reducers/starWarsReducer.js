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
      return { loading: action.payload}

    case types.SUCCESS:
      return { characters: action.payload}

    case types.ERROR:
      return { error: action.payload}
    default:
      return state;
  }
};
