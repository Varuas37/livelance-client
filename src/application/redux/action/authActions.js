import { useNavigate } from "react-router-dom";
import { verifyUser, verifyUserForSignUp } from "../../../repository/dummyUser";
import { SET_USER } from "./types";

export const loginUser = (user) => async (dispatch) => {
	const response = verifyUser(user);
	if (response.data.token !== "invalid user") {
		dispatch({ type: SET_USER, payload: user });
		return true;
	}
};

export const signUpUser = (user) => async (dispatch) => {
	const response = verifyUserForSignUp(user);
	if (response.data.token !== "invalid user") {
		dispatch({ type: SET_USER, payload: user });
		return true;
	}
};
