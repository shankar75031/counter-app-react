import * as actionTypes from "../actions/actions";
const initialState = {
  results: [],
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ value: action.result, id: new Date() }),
      };
    case actionTypes.DELETE_RESULT:
      const newArray = state.results.filter((element) => {
        return element.id !== action.resultElId;
      });
      return {
        ...state,
        results: newArray,
      };
    default:
      return state;
  }
};

export default resultReducer;
