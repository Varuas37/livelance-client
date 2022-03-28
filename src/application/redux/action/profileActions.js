import { useSelector } from "react-redux";
import { fetchDummyProfile } from "../../../repository/dummyProfile";
import {
	fetchDummyReviewsData,
	fetchDummyReviewsList,
} from "../../../repository/dummyReviewsList";
import MainApi from "../../../repository/MainApi";
import {
	SET_PROFILE,
	EDIT_AND_SAVE_PROFILE,
	SET_REVIEWS,
	SET_REVIEWS_DATA,
} from "./types";

export const getProfile = (profile) => async (dispatch) => {
	try {
		const token = localStorage.LLtoken;
		const AuthStr = "Bearer ".concat(token);

		const response = await MainApi.get(`/profile/current`, {
			headers: { Authorization: AuthStr },
		});
		if (response.status === 200 || response.status === 201) {
			dispatch({ type: SET_PROFILE, payload: response.data.profile });
			return true;
		}
	} catch (err) {
		console.log(err.message);
	}
};
export const setProfile = (profile) => async (dispatch) => {
	try {
		const token = localStorage.LLtoken;
		const AuthStr = "Bearer ".concat(token);

		const response = await MainApi.put(
			"/profile",
			{
				avatar: profile.avatar,
				coverImage: profile.coverImage,
				firstName: profile.firstName,
				lastName: profile.lastName,
				gender: profile.gender,
				contactNumber: profile.contactNumber,
				about: profile.about,
				skills: profile.skills,
				categories: profile.categories,
				subCategories: profile.subCategories,
			},
			{
				headers: { Authorization: AuthStr },
			}
		);
		// console.log(response);
		if (response.status === 200 || response.status === 201) {
			dispatch({ type: SET_PROFILE, payload: response.data.profile });
			return true;
		}
	} catch (err) {
		alert("Unsuccessful!");
		console.log(err.message);
		return false;
	}
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
export const submitReview = async (review) => async (dispatch) => {};
