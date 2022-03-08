import {
	fetchDummyFreelanceById,
	fetchDummyFreelanceList,
} from "../../../repository/dummyFreelanceList";
import { SET_FREELANCE_LIST, SET_FREELANCE_BY_ID } from "./types";

export const setFreelanceList = () => async (dispatch) => {
	const response = fetchDummyFreelanceList();
	dispatch({ type: SET_FREELANCE_LIST, payload: response.data });
};

export const setFreelanceById = (id) => async (dispatch) => {
	const response = fetchDummyFreelanceById(id);
	dispatch({ type: SET_FREELANCE_BY_ID, payload: response.data });
};
