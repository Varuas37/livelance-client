import { useNavigate } from "react-router-dom";
import { verifyUser, verifyUserForSignUp } from "../../../repository/dummyUser";
import { SET_AUTH, SET_USER } from "./types";
import MainApi from "../../../repository/MainApi";

export const loginUser = (user) => async (dispatch) => {
	try {
		const response = await MainApi.post("/auth/signin", {
			email: user.email,
			password: user.password,
		});
		if (response.data.auth_token) {
			dispatch({ type: SET_AUTH, payload: true });
			localStorage.setItem("LLtoken", response.data.auth_token);
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
		alert("Wrong Credentials Entered!");
		dispatch({ type: SET_AUTH, payload: false });
		console.log(err.message);
		return false;
	}
};
