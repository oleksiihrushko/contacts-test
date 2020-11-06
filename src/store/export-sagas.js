import { call, put, takeEvery } from "redux-saga/effects";
import {
	fetchContactsError,
	fetchContactsSuccess,
	FETCH_CONTACTS_REQUEST,
} from "./app/actions";
import { getContacts } from "services";

function* fetchContactsWatcher() {
	yield takeEvery(FETCH_CONTACTS_REQUEST, fetchContactsWorker);
}

function* fetchContactsWorker() {
	try {
		const contacts = yield call(getContacts);
		yield put(fetchContactsSuccess(contacts));
		console.log(contacts);
	} catch (err) {
		console.log(err);
		yield put(fetchContactsError(err));
	}
}

export { fetchContactsWatcher };
