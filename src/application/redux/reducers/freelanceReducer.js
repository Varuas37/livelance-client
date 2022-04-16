import {
	GET_FREELANCE_LIST,
	SET_FREELANCE_LIST,
	SET_FREELANCE_BY_ID,
	SET_SAVED_FREELANCE_LIST,
	SET_OFFERED_FREELANCE_LIST,
	SET_ACCEPTED_FREELANCE_LIST,
	SET_APPLIED_FREELANCE_LIST,
	SET_POSTED_FREELANCE_LIST,
	SET_CATEGORY_LIST,
	SET_SEARCH_QUERY_TERM,
	SET_APPLIED_FREELANCE_ID_LIST,
	SET_SAVED_FREELANCE_ID_LIST,
	SET_CANDIDATE_LIST,
	SET_ACCEPTED_FREELANCERS_ID_LIST,
	SET_REJECTED_FREELANCERS_ID_LIST,
	SET_FREELANCERS_LIST_FOR_HOMEPAGE,
	SET_OFFERED_FREELANCERS_ID_LIST,
	SET_DENIED_FREELANCERS_ID_LIST,
	SET_DENIED_FREELANCE_LIST,
	SET_ACCEPTED_FREELANCE_ID_LIST,
	SET_SEARCH_QUERY_RESULT_FREELANCE_LIST,
} from "../action/types";

const initialState = {
	savedFreelanceList: [],
	offeredFreelanceList: [],
	deniedFreelanceList: [],
	acceptedFreelanceList: [],
	appliedFreelanceList: [],
	selectedFreelance: {},
	postedFreelanceList: [],
	candidateList: [],
	postedFreelance: {},
	categoryList: [],
	searchQueryList: [],
	searchQueryResultFreelanceList: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_FREELANCE_LIST:
			return { ...state, freelanceList: payload };
		case SET_FREELANCE_LIST:
			return { ...state, freelanceList: payload };
		case SET_FREELANCERS_LIST_FOR_HOMEPAGE:
			return { ...state, freelancersListForHomePage: payload };
		case SET_APPLIED_FREELANCE_ID_LIST:
			return { ...state, appliedFreelanceIdList: payload };
		case SET_SAVED_FREELANCE_ID_LIST:
			return { ...state, savedFreelanceIdList: payload };
		case SET_ACCEPTED_FREELANCE_ID_LIST:
			return { ...state, acceptedFreelanceIdList: payload };
		case SET_FREELANCE_BY_ID:
			return { ...state, selectedFreelance: payload };
		case SET_SAVED_FREELANCE_LIST:
			return { ...state, savedFreelanceList: payload };
		case SET_OFFERED_FREELANCE_LIST:
			return { ...state, offeredFreelanceList: payload };
		case SET_DENIED_FREELANCE_LIST:
			return { ...state, deniedFreelanceList: payload };
		case SET_ACCEPTED_FREELANCE_LIST:
			return { ...state, acceptedFreelanceList: payload };
		case SET_APPLIED_FREELANCE_LIST:
			return { ...state, appliedFreelanceList: payload };
		case SET_SEARCH_QUERY_RESULT_FREELANCE_LIST:
			return { ...state, searchQueryResultFreelanceList: payload };
		case SET_POSTED_FREELANCE_LIST:
			return { ...state, postedFreelanceList: payload };
		case SET_CANDIDATE_LIST:
			return { ...state, candidateList: payload };
		case SET_CATEGORY_LIST:
			return { ...state, categoryList: payload };
		case SET_SEARCH_QUERY_TERM:
			return { ...state, searchQueryTerm: payload };
		case SET_OFFERED_FREELANCERS_ID_LIST:
			return { ...state, offeredFreelancersIdList: payload };
		case SET_DENIED_FREELANCERS_ID_LIST:
			return { ...state, deniedFreelancersIdList: payload };
		default:
			return state;
	}
}
