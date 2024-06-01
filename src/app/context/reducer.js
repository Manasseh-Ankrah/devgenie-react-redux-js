export const initialState = {
  isDarkMode: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        isDarkMode: !action.item.isDarkMode,
      };

    default:
      return state;
  }
};

export default reducer;
