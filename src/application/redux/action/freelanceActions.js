import {
	fetchDummyFreelanceById,
	fetchDummyFreelanceList,
} from "../../../repository/dummyFreelanceList";
import { SET_FREELANCE_LIST, SET_FREELANCE_BY_ID } from "./types";

export const fetchFreelanceList = () => async (dispatch) => {
	const response = fetchDummyFreelanceList();
	dispatch({ type: SET_FREELANCE_LIST, payload: response.data });
};

export const fetchFreelanceById = (id) => async (dispatch) => {
	const response = fetchDummyFreelanceById(id);
	dispatch({ type: SET_FREELANCE_BY_ID, payload: response.data });
};
