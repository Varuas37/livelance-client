import {
	SET_USER
} from "../action/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_USER:
			return { ...state, user: payload };		
		default:
			return state;
	}
}