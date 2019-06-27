import data from "../data.json";
const initState = {
  ifFetching: false,
  list: data.mylist,
  recommendations: data.recommendations,
  err: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        list: state.list,
        recommendations: state.recommendations
      };
    case "REMOVE_ITEM_FROM_LIST":
      return {
        list: [
          ...state.list.slice(0, action.id),
          ...state.list.slice(action.id + 1)
        ],
        recommendations: [...state.recommendations, state.list[action.id]]
      };
    case "ADD_ITEM_TO_LIST":
      return {
        list: [...state.list, state.recommendations[action.id]],
        recommendations: [
          ...state.recommendations.slice(0, action.id),
          ...state.recommendations.slice(action.id + 1)
        ]
      };
    default:
      return state;
  }
};

export default reducer;
