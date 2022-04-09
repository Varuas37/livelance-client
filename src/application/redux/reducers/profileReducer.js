import {
	SET_PROFILE,
	EDIT_AND_SAVE_PROFILE,
	SET_REVIEWS,
	SET_REVIEWS_DATA,
	SET_VIEW_PROFILE,
	SET_OWN_PROFILE_REVIEWS,
	SET_OWN_PROFILE_REVIEWS_DATA,
} from "../action/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_PROFILE:
			return { ...state, profile: payload };
		case SET_VIEW_PROFILE:
			return { ...state, viewProfile: payload };
		case EDIT_AND_SAVE_PROFILE:
			return { ...state, profile: payload };
		case SET_OWN_PROFILE_REVIEWS:
			return { ...state, ownReviewsList: payload };
		case SET_OWN_PROFILE_REVIEWS_DATA:
			return { ...state, ownReviewsData: payload };
		case SET_REVIEWS:
			return { ...state, reviewsList: payload };
		case SET_REVIEWS_DATA:
			return { ...state, reviewsData: payload };
		default:
			return state;
	}
}
