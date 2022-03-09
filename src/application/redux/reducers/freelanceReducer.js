import { GET_FREELANCE_LIST, SET_FREELANCE_LIST, SET_FREELANCE_BY_ID, SET_SAVED_FREELANCE_LIST } from "../action/types";

const initialState = {
	freelanceList: [],
	selectedFreelance: {},
	savedFreelanceList: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_FREELANCE_LIST:
			return { ...state, freelanceList: payload };
		case SET_FREELANCE_LIST:
			return { ...state, freelanceList: payload };
		case SET_FREELANCE_BY_ID:
			return { ...state, selectedFreelance: payload };
		case SET_SAVED_FREELANCE_LIST:
			return { ...state, savedFreelanceList: payload };
		default:
			return state;
	}
}
