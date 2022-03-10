import { fetchDummyProfile } from "../../../repository/dummyProfile";
import {
	fetchDummyReviewsData,
	fetchDummyReviewsList,
} from "../../../repository/dummyReviewsList";
import {
	SET_PROFILE,
	EDIT_AND_SAVE_PROFILE,
	SET_REVIEWS,
	SET_REVIEWS_DATA,
} from "./types";

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
export const setReviewsData = () => async (dispatch) => {
	const response = fetchDummyReviewsData();
	dispatch({ type: SET_REVIEWS_DATA, payload: response.data });
};
export const submitReview = async (review) => async (dispatch) => {
	// const response = await submitreview(review);
};
