import { createAction } from "../utils";

export const OActionTypes = {
	prefix: "@app",
};

export const FETCH_CONTACTS_REQUEST = "FETCH_CONTACTS_REQUEST";
export const FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS";
export const FETCH_CONTACTS_ERROR = "FETCH_CONTACTS_ERROR";
export const CHANGE_CONTACTS_VIEW = "CHANGE_CONTACTS_VIEW";

export const fetchContactsRequest = createAction(FETCH_CONTACTS_REQUEST);
export const fetchContactsSuccess = createAction(FETCH_CONTACTS_SUCCESS);
export const fetchContactsError = createAction(FETCH_CONTACTS_ERROR);
export const changeContactsView = createAction(CHANGE_CONTACTS_VIEW);
