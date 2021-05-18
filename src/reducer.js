const reducer = (store = 0, action) => {
  switch (action.type) {
    case "INC":
      return store + action.value;
    case "DEC":
      return store - action.value;
    case "RES":
      if (store === 0) {
        return store;
      }
      return (store = action.value);
    default:
      return store;
  }
};

export default reducer;
