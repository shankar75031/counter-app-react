import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  results: [],
};

const deleteResult = (state, action) => {
  const newArray = state.results.filter((element) => {
    return element.id !== action.resultElId;
  });
  return updateObject(state, { results: newArray });
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({ value: action.result, id: new Date() }),
      });
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
};

export default resultReducer;
