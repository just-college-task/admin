import { login, logout } from "./auth";
import { getUserInfo, setUserToken, setUserInfo, resetUser } from "./user";
import { toggleSiderBar, toggleSettingPanel } from "./app";
import { changeSetting } from "./settings";
import { addTag, emptyTaglist, deleteTag, closeOtherTags } from "./tagsView";
import { historyChange } from "./history";

export {
  login,
  logout,
  getUserInfo,
  setUserToken,
  setUserInfo,
  resetUser,
  toggleSiderBar,
  toggleSettingPanel,
  changeSetting,
  addTag,
  emptyTaglist,
  deleteTag,
  closeOtherTags,
  historyChange,
};
