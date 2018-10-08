export default (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    default:
      return state;
    case "REMOVE_ITEM":
      return [...state];
    default:
      return state;
  }
};
