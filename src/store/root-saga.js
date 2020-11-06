import { all } from "redux-saga/effects";
import * as sagas from "./export-sagas";

console.log("sagas", Object.values(sagas));
export function* rootSaga() {
	yield all(Object.values(sagas).map((saga) => saga()));
}
