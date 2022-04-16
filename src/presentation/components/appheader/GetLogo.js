import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const GetLogo = () => {
	let navigate = useNavigate();

	const myStyle = {
		position: "absolute",
		zIndex: "1",
		margin: "16px 0 0 32px",
		cursor: "pointer",
	};
	const myStylePosFixed = {
		position: "fixed",
		zIndex: "1",
		margin: "16px 0 0 32px",
		cursor: "pointer",
	};

	const location = useLocation();

	const imgStyle = {
		width: "128px",
		height: "84px",
	};

	return (
		<>
			{location.pathname !== "/" && location.pathname !== "/onboarding" && (
				<div
					style={
						!location.pathname.includes("profile") ? myStylePosFixed : myStyle
					}
					onClick={(e) => {
						e.preventDefault();

						navigate("/home");
					}}
				>
					<img
						style={imgStyle}
						src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
						alt=""
					/>
				</div>
			)}
		</>
	);
};

export default GetLogo;
