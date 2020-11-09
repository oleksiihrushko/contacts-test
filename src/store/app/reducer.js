import { createReducer } from "../utils";
import {
	CHANGE_CONTACTS_VIEW,
	FETCH_CONTACTS_ERROR,
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
	[FETCH_CONTACTS_ERROR](state, action) {
		return { ...state, error: action.payload };
	},
	[CHANGE_CONTACTS_VIEW](state, action) {
		return { ...state, view: action.payload };
	},
});
