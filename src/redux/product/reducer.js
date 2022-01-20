import initialState from "./state";
import { FETCH_REQUEST } from "./types";

const productReducer = (state = initialState, action) {
	switch (action.type) {
		case FETCH_REQUEST:
			return {
				...state,
				isLoading: true
			}
		default:
			return state
	}
}