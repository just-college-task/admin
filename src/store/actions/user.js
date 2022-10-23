import * as types from "../action-types";
import {
  reqUserInfo
} from "@/api/user";
import store from '@/store';

export const getUserInfo = (token) => (dispatch) => {
  return new Promise((resolve, reject) => {
    reqUserInfo(token)
      .then((response) => {
        console.log(response);
        const {
          data
        } = response;
        if (data.status === 200) {
          const userInfo = data.data;
          userInfo.role=userInfo.type;//字段冲突
          dispatch(setUserInfo(userInfo));
          console.log("store",store.getState());
          resolve(data);
        } else {
          const msg = data.message;
          reject(msg);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const setUserToken = (token) => {
  return {
    type: types.USER_SET_USER_TOKEN,
    token,
  };
};

export const setUserInfo = (userInfo) => {
  return {
    ...userInfo,//要注意userInfo内有type
    type: types.USER_SET_USER_INFO,
  };
};

export const resetUser = () => {
  return {
    type: types.USER_RESET_USER,
  };
};