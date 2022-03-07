import { fetchDummyFreelanceById, fetchDummyFreelanceList } from "../../../repository/dummyFreelanceList";
import { SET_FREELANCE_LIST, SET_FREELANCE_BY_ID } from "./types";

export const fetchFreelanceList = () => {
	const response = fetchDummyFreelanceList();

	return { type: SET_FREELANCE_LIST, payload: response.data };
};

export const fetchFreelanceById = (id) => {
	const response = fetchDummyFreelanceById(id);
		
	return { type: SET_FREELANCE_BY_ID, payload: response.data };
};
