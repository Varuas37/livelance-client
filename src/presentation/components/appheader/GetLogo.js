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
			{/* <div className="flex justify-start lg:w-0 lg:flex-1 z-100">
				<a href="#">
					<span className="sr-only">Workflow</span>
					<img
						className="h-8 w-auto sm:h-10"
						src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
						alt=""
					/>
				</a>
			</div> */}
			{location.pathname !== "/" && location.pathname !== "/onboarding" && (
				<div
					style={
						!location.pathname.includes("profile") ? myStylePosFixed : myStyle
					}
					onClick={(e) => {
						e.preventDefault();

						navigate("/home");
					}}
				></div>
			)}
		</>
	);
};

export default GetLogo;
