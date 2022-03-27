import { fetchdummyAppliedFreelanceList } from "../../../repository/dummyAppliedFreelances";
import {
	fetchDummyFreelanceById,
	fetchDummyFreelanceList,
	searchFreelanceList,
} from "../../../repository/dummyFreelanceList";
import { fetchdummyOfferedFreelanceList } from "../../../repository/dummyOfferedFreelances";
import { fetchdummyAcceptedFreelanceList } from "../../../repository/dummyAcceptedFreelances";
import { fetchdummySavedFreelanceList } from "../../../repository/dummySavedJobs";
import {
	SET_FREELANCE_LIST,
	SET_FREELANCE_BY_ID,
	SET_SAVED_FREELANCE_LIST,
	SET_OFFERED_FREELANCE_LIST,
	SET_ACCEPTED_FREELANCE_LIST,
	SET_APPLIED_FREELANCE_LIST,
	SET_POSTED_FREELANCE_LIST,
	SET_POSTED_FREELANCE,
	SET_CATEGORY_LIST,
	SET_SEARCH_QUERY_LIST,
} from "./types";
import { fetchdummyPostedFreelanceList } from "../../../repository/dummyPostedFreelance";
import { fetchDummyCategoryList } from "../../../repository/dummyCategories";
import MainApi from "../../../repository/MainApi";

export const setFreelanceList = () => async (dispatch) => {
	const token = localStorage.LLtoken;
	// console.log(token);
	// const response = await MainApi.get("/jobs", config)
	// 	.then(console.log)
	// 	.catch(console.log);

	const AuthStr = "Bearer ".concat(token);
	// console.log(AuthStr);

	const response = await MainApi.get("/jobs", {
		headers: { Authorization: AuthStr },
	});

	dispatch({ type: SET_FREELANCE_LIST, payload: response.data.jobs });
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
	const response = fetchdummyAcceptedFreelanceList();
	dispatch({ type: SET_ACCEPTED_FREELANCE_LIST, payload: response.data });
};
export const setAppliedFreelanceList = () => async (dispatch) => {
	const response = fetchdummyAppliedFreelanceList();
	dispatch({ type: SET_APPLIED_FREELANCE_LIST, payload: response.data });
};
export const setPostedFreelanceList = () => async (dispatch) => {
	const response = fetchdummyPostedFreelanceList();
	dispatch({ type: SET_POSTED_FREELANCE_LIST, payload: response.data });
};

export const setPostedFreelance = (postedFreelance) => async (dispatch) => {
	try {
		console.log(postedFreelance);
		const token = localStorage.LLtoken;
		const AuthStr = "Bearer ".concat(token);

		const response = await MainApi.post(
			"/jobs",

			{
				postedOn: postedFreelance.postedOn,
				jobTitle: postedFreelance.jobTitle,
				jobDescription: postedFreelance.jobDescription,
				category: postedFreelance.category,

				subCategory: postedFreelance.subCategory,
				skills: postedFreelance.skills,
				postedBy: postedFreelance.postedBy,
				duration: postedFreelance.duration,

				rate: postedFreelance.rate,
				rateDuration: postedFreelance.rateDuration,
				location: postedFreelance.location,
				city: postedFreelance.city,
				state: postedFreelance.state,
				zipcode: postedFreelance.zipcode,
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

export const setCategoryList = () => async (dispatch) => {
	const response = fetchDummyCategoryList();
	dispatch({ type: SET_CATEGORY_LIST, payload: response.data });
};

export const submitCategoryFilter =
	async (categoryFields) => async (dispatch) => {};

export const searchQueries = (queryList) => async (dispatch) => {
	// console.log(postedFreelance);
	const response = searchFreelanceList(queryList);
	dispatch({ type: SET_FREELANCE_LIST, payload: response.data });
	// dispatch({ type: SET_POSTED_FREELANCE, payload: postedFreelance });
};
export const setSearchTermsList = (queryList) => async (dispatch) => {
	// console.log(postedFreelance);
	dispatch({ type: SET_SEARCH_QUERY_LIST, payload: queryList });
	// dispatch({ type: SET_POSTED_FREELANCE, payload: postedFreelance });
};
