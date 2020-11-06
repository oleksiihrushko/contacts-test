import { createReducer } from "../utils";
import {
	FETCH_CONTACTS_ERROR,
	// FETCH_CONTACTS_REQUEST,
	FETCH_CONTACTS_SUCCESS,
} from "./actions";
// import { OActionTypes as app } from './actions';

export const initialState = {};

export const reducer = createReducer(initialState, {
	"@@router/LOCATION_CHANGE"(state) {
		return state;
	},
	[FETCH_CONTACTS_SUCCESS](state, action) {
		return { ...state, contacts: action.payload };
	},
	[FETCH_CONTACTS_ERROR](state) {
		return state;
	},
});
