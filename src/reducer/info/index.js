const initialState = {
  data: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHANGE/DATA":
      return {
        ...state,
        data: [...state.data, payload],
      };

    default:
      return state;
  }
};
export default reducer;
