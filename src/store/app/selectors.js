import { createSelector } from "reselect";

const _getAppState = (state) => state.app;

export const getAppState = createSelector([_getAppState], (app) => app);

const _selectContacts = (state) => state.get("contacts");

export const makeSelectContacts = () =>
	createSelector([_selectContacts], (contactsState) =>
		contactsState.get("contacts")
	);
