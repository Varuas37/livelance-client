import { GET_FREELANCE_LIST, SET_FREELANCE_LIST } from "../action/types";

const initialState = {
	freelanceList: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_FREELANCE_LIST:
			return { ...state, freelanceList: payload };
		case SET_FREELANCE_LIST:
			return { ...state, freelanceList: payload };
		default:
			return state;
	}
}
