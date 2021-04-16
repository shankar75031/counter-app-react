import * as actionTypes from "./actions";
const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // const newState = Object.assign({}, state)
      // newState.counter = state.counter + 1
      // return newState
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val,
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val,
      };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ value: state.counter, id: new Date() }),
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

export default reducer;
