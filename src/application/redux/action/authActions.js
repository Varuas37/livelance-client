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
			localStorage.setItem("LLtoken", response.data.auth_token);
			checkUser();
			dispatch({ type: SET_AUTH, payload: true });
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
			const AuthStr = "Bearer ".concat(token);
			const response = await MainApi.get("/profile/current", {
				headers: { Authorization: AuthStr },
			});

			if (response.status === 200) {
				dispatch({ type: SET_AUTH, payload: true });
				dispatch({ type: SET_USER, payload: response.data.profile });

				const values = {
					email: response.data.profile.firstName,
					_id: response.data.profile.userId
				}

				localStorage.setItem(
					process.env.REACT_APP_LOCALHOST_KEY,
					JSON.stringify(values)
				  );

				  //localStorage.setItem("._id", response.data.profile.userId);

			} else if (response.status === 404) {
				console.log("here");
			}
		}
	} catch (err) {
		console.log(err);
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
			}
		}
	} catch (err) {
		console.log(err.message);
	}
};
