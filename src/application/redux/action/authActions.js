import { useNavigate } from "react-router-dom";
import { verifyUser, verifyUserForSignUp } from "../../../repository/dummyUser";
import { SET_AUTH, SET_PROFILE, SET_USER } from "./types";
import MainApi from "../../../repository/MainApi";

export const loginUser = (user) => async (dispatch) => {
	try {
		const response = await MainApi.post("/auth/signin", {
			email: user.email,
			password: user.password,
		});
		if (response.data.auth_token) {
			localStorage.setItem("LLtoken", response.data.auth_token);
			dispatch({ type: SET_AUTH, payload: true });
		}
	} catch (err) {
		alert("Wrong Credentials Entered!");
		dispatch({ type: SET_AUTH, payload: false });
		console.log(err.message);
	}
};

export const signUpUser = (user) => async (dispatch) => {
	try {
		const response = await MainApi.post("/auth/signup", {
			email: user.email,
			password: user.password,
			accountType: user.role,
		});
		if (response.data.auth_token) {
			// console.log(response.data.auth_token)
			dispatch({ type: SET_AUTH, payload: true });
			localStorage.setItem("LLtoken", response.data.auth_token);
			return true;
		}
	} catch (err) {
		alert("Task Unsuccessful!");
		dispatch({ type: SET_AUTH, payload: false });
		console.log(err.message);
		return false;
	}
};

export const checkUser = () => async (dispatch) => {
	try {
		const token = localStorage.LLtoken;
		if (token) {
			// console.log("here");
			const AuthStr = "Bearer ".concat(token);
			const response = await MainApi.get("/profile/current", {
				headers: { Authorization: AuthStr },
			});

			if (response.status === 200) {
				dispatch({ type: SET_AUTH, payload: true });
				dispatch({ type: SET_USER, payload: response.data.profile });
				// return true;
			} else if (response.status === 404) {
				console.log("here");
			}
		}
	} catch (err) {
		// alert("Unsuccessful!");
		console.log(err);
		// return false;
	}
};
export const getAccountType = () => async (dispatch) => {
	try {
		const token = localStorage.LLtoken;
		if (token) {
			const AuthStr = "Bearer ".concat(token);
			const response = await MainApi.get("/profile/current", {
				headers: { Authorization: AuthStr },
			});

			if (response.status === 200) {
				dispatch({ type: SET_AUTH, payload: true });
				dispatch({ type: SET_USER, payload: response.data.profile });
				// return true;
			}
		}
	} catch (err) {
		// alert("Unsuccessful!");
		console.log(err.message);
		// return false;
	}
};
