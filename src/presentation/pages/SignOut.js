import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_AUTH } from "../../application/redux/action/types";

const SignOut = () => {
	let navigate = useNavigate();
	let dispatch = useDispatch();

	useEffect(() => {
		localStorage.removeItem("LLtoken");
		dispatch({ type: SET_AUTH, payload: false });

		navigate("/");
	}, []);

	return <div>SignOut</div>;
};

export default SignOut;
