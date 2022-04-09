import {
	SET_ACCEPTED_FREELANCERS_ID_LIST,
	SET_CANDIDATE_LIST,
	SET_REJECTED_FREELANCERS_ID_LIST,
	SET_FREELANCERS_LIST_FOR_HOMEPAGE,
} from "./types";
import MainApi from "../../../repository/MainApi";
import { groupBy } from "../../helper/groupBy";

export const setFreelancersListForHomeFeed = () => async (dispatch) => {
	try {
		const token = localStorage.LLtoken;

		const AuthStr = "Bearer ".concat(token);

		const responseRole = await MainApi.get("/profile/current", {
			headers: { Authorization: AuthStr },
		});

		if (responseRole.data.profile) {
			try {
				const response = await MainApi.post(
					`/profile/category`,
					{
						categories: responseRole.data.profile.categories,
					},
					{
						headers: { Authorization: AuthStr },
					}
				);
				if (response.status === 200 || response.status === 201) {
					dispatch({
						type: SET_FREELANCERS_LIST_FOR_HOMEPAGE,
						payload: response.data.profile,
					});
				}
			} catch (err) {
				console.log(err.message);
			}
			// const responseJobStatus = await MainApi.get("/jobs/getbystatus", {
			// 	headers: {
			// 		Authorization: AuthStr,
			// 		data: JSON.stringify({ status: jobStatus }),
			// 	},
			// });
			// if (jobStatus === "Applied") {
			// 	if (responseJobStatus.data.status.length > 0) {
			// 		dispatch({
			// 			type: SET_APPLIED_FREELANCE_ID_LIST,
			// 			payload: groupBy(responseJobStatus.data.status, "status"),
			// 		});
			// 	} else {
			// 		dispatch({
			// 			type: SET_APPLIED_FREELANCE_ID_LIST,
			// 			payload: [],
			// 		});
			// 	}
			// } else if (jobStatus === "Saved") {
			// 	if (responseJobStatus.data.status.length > 0) {
			// 		dispatch({
			// 			type: SET_SAVED_FREELANCE_ID_LIST,
			// 			payload: groupBy(responseJobStatus.data.status, "status"),
			// 		});
			// 	} else {
			// 		dispatch({
			// 			type: SET_SAVED_FREELANCE_ID_LIST,
			// 			payload: [],
			// 		});
			// 	}
			// }
		}
	} catch (err) {
		alert("Unsuccessful!");
		console.log(err.message);
	}
};
export const setCandidateList = (jobId) => async (dispatch) => {
	try {
		const token = localStorage.LLtoken;
		const AuthStr = "Bearer ".concat(token);

		const response = await MainApi.get(`/jobs/${jobId}/candidates`, {
			headers: { Authorization: AuthStr },
		});
		if (response.status === 200 || response.status === 201) {
			dispatch({ type: SET_CANDIDATE_LIST, payload: response.data.candidates });
		}
	} catch (err) {
		console.log(err);
	}
};

export const setFreelanceIdListByStatus = (jobStatus) => async (dispatch) => {
	const token = localStorage.LLtoken;

	const AuthStr = "Bearer ".concat(token);

	const responseJobStatus = await MainApi.get("/jobs/getbystatus", {
		headers: {
			Authorization: AuthStr,
			data: JSON.stringify({ status: jobStatus }),
		},
	});

	if (jobStatus === "Accepted") {
		if (responseJobStatus.data.status.length > 0) {
			dispatch({
				type: SET_ACCEPTED_FREELANCERS_ID_LIST,
				payload: groupBy(responseJobStatus.data.status, "status"),
			});
		} else {
			dispatch({
				type: SET_ACCEPTED_FREELANCERS_ID_LIST,
				payload: [],
			});
		}
	} else if (jobStatus === "Denied") {
		if (responseJobStatus.data.status.length > 0) {
			dispatch({
				type: SET_REJECTED_FREELANCERS_ID_LIST,
				payload: groupBy(responseJobStatus.data.status, "status"),
			});
		} else {
			dispatch({
				type: SET_REJECTED_FREELANCERS_ID_LIST,
				payload: [],
			});
		}
	}
};
