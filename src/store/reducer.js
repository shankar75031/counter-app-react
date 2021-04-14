const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      // const newState = Object.assign({}, state)
      // newState.counter = state.counter + 1
      // return newState
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.val,
      };
    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - action.val,
      };
    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({ value: state.counter, id: new Date() }),
      };
    case "DELETE_RESULT":
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
