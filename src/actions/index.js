export function getDataStart() {
  return {
    type: "FETCH_DATA_START"
  };
}
export function getDataSuccess() {
  return {
    type: "FETCH_DATA_SUCCESS"
  };
}

export function getDataFail() {
  return {
    type: "FETCH_DATA_FAIL"
  };
}

export function removeItemFromList(id) {
  return {
    type: "REMOVE_ITEM_FROM_LIST",
    id: id
  };
}

export function addItemToList(id) {
  return {
    type: "ADD_ITEM_TO_LIST",
    id: id
  };
}

export function getData() {
  return (dispatch, store) => {
    dispatch(getDataStart());
    dispatch(getDataSuccess());
  };
}
