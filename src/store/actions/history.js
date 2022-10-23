import * as types from "../action-types";

export const historyChange = (data) => {
  return {
    type: types.ROUTER_HISTORY,
    ...data,
  };
};
