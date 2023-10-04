import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import authenSlice from "./authenSlice";
import { persistReducer } from "redux-persist";

const authenSetup = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["userProfile"],
};

export default combineReducers({
  authenReducer: persistReducer(authenSetup, authenSlice),
});
