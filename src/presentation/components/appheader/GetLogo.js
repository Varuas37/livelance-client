import React from "react";
import { useNavigate } from "react-router-dom";

const GetLogo = () => {
	let navigate = useNavigate();
	const myStyle = {
		position: "absolute",
		zIndex: "1",
		margin: "16px 0 0 32px",
		cursor: "pointer",
	};

	const imgStyle = {
		width: "128px",
		height: "84px",
	};
	return (
		<div
			style={myStyle}
			onClick={(e) => {
				e.preventDefault();

				navigate("/home");
			}}
		>
			<img style={imgStyle} src="/images/logo.png" alt="" />
		</div>
	);
};

export default GetLogo;
