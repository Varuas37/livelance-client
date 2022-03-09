import { fetchdummyAppliedFreelanceList } from "../../../repository/dummyAppliedFreelances";
import {
	fetchDummyFreelanceById,
	fetchDummyFreelanceList,
} from "../../../repository/dummyFreelanceList";
import { fetchdummyOfferedFreelanceList } from "../../../repository/dummyOfferedFreelances";
import { fetchdummyOngoingFreelanceList } from "../../../repository/dummyOngoingFreelances";
import { fetchdummySavedFreelanceList } from "../../../repository/dummySavedJobs";
import {
	SET_FREELANCE_LIST,
	SET_FREELANCE_BY_ID,
	SET_SAVED_FREELANCE_LIST,
	SET_OFFERED_FREELANCE_LIST,
	SET_ONGOING_FREELANCE_LIST,
	SET_APPLIED_FREELANCE_LIST,
} from "./types";

export const setFreelanceList = () => async (dispatch) => {
	const response = fetchDummyFreelanceList();
	dispatch({ type: SET_FREELANCE_LIST, payload: response.data });
};

export const setFreelanceById = (id) => async (dispatch) => {
	const response = fetchDummyFreelanceById(id);
	dispatch({ type: SET_FREELANCE_BY_ID, payload: response.data });
};

export const setSavedFreelanceList = () => async (dispatch) => {
	const response = fetchdummySavedFreelanceList();
	dispatch({ type: SET_SAVED_FREELANCE_LIST, payload: response.data });
};

export const setOfferedFreelanceList = () => async (dispatch) => {
	const response = fetchdummyOfferedFreelanceList();
	dispatch({ type: SET_OFFERED_FREELANCE_LIST, payload: response.data });
};
export const setOngoingFreelanceList = () => async (dispatch) => {
	const response = fetchdummyOngoingFreelanceList();
	dispatch({ type: SET_ONGOING_FREELANCE_LIST, payload: response.data });
};
export const setAppliedFreelanceList = () => async (dispatch) => {
	const response = fetchdummyAppliedFreelanceList();
	dispatch({ type: SET_APPLIED_FREELANCE_LIST, payload: response.data });
};
