import * as types from "../action-types";

const initState = {
  history:{}
};
export default function settings(state = initState, action) {
  switch (action.type) {
    case types.ROUTER_HISTORY:
      return {...state,...action.history};
    default:
      return state;
  }
}
