import { all, fork } from "redux-saga/effects";
import restaurant from "./restaurant";
import axios from "axios";

axios.defaults.baseURL = "https://27.96.135.106:8010/api";
// axios.defaults.baseURL = "http://27.96.135.106/api";
// axios.defaults.baseURL = "http://220.77.183.55:8010/api";
// axios.defaults.baseURL = "http://localhost:8010/api";

export default function* rootSaga() {
  yield all([fork(restaurant)]);
}
