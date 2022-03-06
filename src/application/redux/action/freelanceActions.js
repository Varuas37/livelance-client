import { dummyFreelanceList } from "../../../repository/dummyFreelanceList";
import { SET_FREELANCE_LIST } from "./types";

export const fetchFreelanceList = () => {
	const response = dummyFreelanceList;

	return { type: SET_FREELANCE_LIST, payload: response.data };
};
