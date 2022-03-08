import { SET_PROFILE, EDIT_AND_SAVE_PROFILE } from "../action/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_PROFILE:
			return { ...state, profile: payload };
		case EDIT_AND_SAVE_PROFILE:
			return { ...state, profile: payload };
		default:
			return state;
	}
}
