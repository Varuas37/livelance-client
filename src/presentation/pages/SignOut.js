import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_AUTH, SET_USER } from "../../application/redux/action/types";

const SignOut = () => {
	let navigate = useNavigate();
	let dispatch = useDispatch();

	useEffect(() => {
		localStorage.removeItem("LLtoken");
		dispatch({ type: SET_AUTH, payload: false });
		dispatch({ type: SET_USER, payload: {} });

		navigate("/");
	}, []);

	return <div>SignOut</div>;
};

export default SignOut;
