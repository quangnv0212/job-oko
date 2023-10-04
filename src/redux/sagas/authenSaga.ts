import { takeLatest } from "redux-saga/effects";
import { login } from "../reducers/authenSlice";

function* sagaLogin(action: any) {
  console.log("run saga");
}
export function* watchLogin() {
  yield takeLatest(login, sagaLogin);
}
