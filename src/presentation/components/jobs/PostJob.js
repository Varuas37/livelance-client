import React from "react";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
	let navigate = useNavigate();

	const postJobButtonContainerStyle = {
		display: "flex",
		justifyContent: "center",
	};
	const postJobButtonStyle = {
		height: "200px",
		width: "200px",
		border: "2px solid gray",
		textAlign: "center",
		fontSize: "24px",
		cursor: "pointer",
		margin: "16px",
	};

	function handlePostJobClick() {
		navigate("/postjob");
	}

	return (
		<div style={postJobButtonContainerStyle}>
			<div style={postJobButtonStyle} onClick={handlePostJobClick}>
				{" "}
				Post a Non-Remote Freelance
			</div>
		</div>
	);
};

export default PostJob;
