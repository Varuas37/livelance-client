import {
	GET_FREELANCE_LIST,
	SET_FREELANCE_LIST,
	SET_FREELANCE_BY_ID,
	SET_SAVED_FREELANCE_LIST,
	SET_OFFERED_FREELANCE_LIST,
	SET_ONGOING_FREELANCE_LIST,
	SET_APPLIED_FREELANCE_LIST,
} from "../action/types";

const initialState = {
	freelanceList: [],
	savedFreelanceList: [],
	offeredFreelanceList: [],
	ongoingFreelanceList: [],
	appliedFreelanceList: [],
	selectedFreelance: {},
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
		case SET_OFFERED_FREELANCE_LIST:
			return { ...state, offeredFreelanceList: payload };
		case SET_ONGOING_FREELANCE_LIST:
			return { ...state, ongoingFreelanceList: payload };
		case SET_APPLIED_FREELANCE_LIST:
			return { ...state, appliedFreelanceList: payload };
		default:
			return state;
	}
}
