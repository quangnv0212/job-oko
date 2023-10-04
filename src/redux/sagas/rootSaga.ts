import { all, fork } from "redux-saga/effects";
import * as AuthenSaga from "./authenSaga";

export default function* rootSaga() {
  yield all([...Object.values(AuthenSaga)].map(fork));
}
