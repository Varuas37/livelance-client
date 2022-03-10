import { fetchDummyProfile } from "../../../repository/dummyProfile";
import { fetchDummyReviewsList } from "../../../repository/dummyReviewsList";
import { SET_PROFILE, EDIT_AND_SAVE_PROFILE, SET_REVIEWS } from "./types";

export const setProfile = () => async (dispatch) => {
	const response = fetchDummyProfile();
	dispatch({ type: SET_PROFILE, payload: response.data });
};

export const editAndSetProfile = (profile) => async (dispatch) => {
	dispatch({ type: EDIT_AND_SAVE_PROFILE, payload: profile });
};

export const setReviews = () => async (dispatch) => {
	const response = fetchDummyReviewsList();
	dispatch({ type: SET_REVIEWS, payload: response.data });
};
