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
		backgroundColor: "teal",
		textAlign: "center",
		color: "white",
		fontSize: "32px",
		cursor: "pointer",
	};

	function handlePostJobClick() {
        navigate("/postjob")
    }

	return (
		<div style={postJobButtonContainerStyle}>
			<div style={postJobButtonStyle} onClick={handlePostJobClick}>
				{" "}
				Post A Job
			</div>
		</div>
	);
};

export default PostJob;
