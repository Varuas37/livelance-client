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
	SET_VIEW_PROFILE,
	SET_OWN_PROFILE_REVIEWS,
	SET_OWN_PROFILE_REVIEWS_DATA,
} from "./types";

const token = localStorage.LLtoken;
const AuthStr = "Bearer ".concat(token);

export const getProfile = () => async (dispatch) => {
	try {
		const response = await MainApi.get(`/profile/current`, {
			headers: { Authorization: AuthStr },
		});

		
		if (response.status === 200 || response.status === 201) {
			dispatch({ type: SET_PROFILE, payload: response.data.profile });

			//localStorage.setItem(
			//	process.env.PROFILE_KEY,
			//	JSON.stringify(response.data.profile)
			//  );

			return true;

		}
	} catch (err) {
		console.log(err.message);
	}
};

export const setProfile = (profile) => async (dispatch) => {
	try {
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
export const setViewProfile = (id) => async (dispatch) => {
	try {
		const response = await MainApi.get(`/profile/${id}`, {
			headers: { Authorization: AuthStr },
		});
		dispatch({ type: SET_VIEW_PROFILE, payload: response.data.profile });

		localStorage.setItem("._id", response.data.profile.userId);
		localStorage.setItem("Name", response.data.profile.firstName);


	} catch (err) {
		console.log(err.message);
	}
};

export const editAndSetProfile = (profile) => async (dispatch) => {
	dispatch({ type: EDIT_AND_SAVE_PROFILE, payload: profile });
};

export const setOwnReviews = (id) => async (dispatch) => {
	try {
		const response = await MainApi.get(`/review/${id}`, {
			headers: { Authorization: AuthStr },
		});

		if (response.status === 200 || response.status === 201) {
			dispatch({
				type: SET_OWN_PROFILE_REVIEWS,
				payload: response.data.review,
			});
		}
	} catch (err) {
		console.log(err.message);
	}
};
export const setReviews = (profileId) => async (dispatch) => {
	try {
		const response = await MainApi.get(`/review/${profileId}`, {
			headers: { Authorization: AuthStr },
		});

		if (response.status === 200 || response.status === 201) {
			dispatch({ type: SET_REVIEWS, payload: response.data.review });
		}
	} catch (err) {
		console.log(err.message);
	}
};
export const setOwnReviewsData = (id) => async (dispatch) => {
	try {
		const response = await MainApi.get(`/review/${id}/summary`, {
			headers: { Authorization: AuthStr },
		});

		if (response.status === 200 || response.status === 201) {
			dispatch({
				type: SET_OWN_PROFILE_REVIEWS_DATA,
				payload: response.data.data,
			});
		}
	} catch (err) {
		console.log(err.message);
	}
};
export const setReviewsData = (id) => async (dispatch) => {
	try {
		const response = await MainApi.get(`/review/${id}/summary`, {
			headers: { Authorization: AuthStr },
		});

		if (response.status === 200 || response.status === 201) {
			dispatch({ type: SET_REVIEWS_DATA, payload: response.data.data });
		}
	} catch (err) {
		console.log(err.message);
	}
};
export const submitReview = (review) => async (dispatch) => {
	try {
		const token = localStorage.LLtoken;
		const AuthStr = "Bearer ".concat(token);

		const response = await MainApi.post(
			"/review",

			{
				postedOn: Date.now(),
				profileId: review.profileId,
				authorId: review.authorId,
				title: review.title,
				content: review.content,
				rating: review.rating,
			},
			{
				headers: { Authorization: AuthStr },
			}
		);

		if (response.status === 200 || response.status === 201) {
			alert("successful!");
		}
	} catch (err) {
		alert("Unsuccessful!");
		console.log(err.message);
	}
};
