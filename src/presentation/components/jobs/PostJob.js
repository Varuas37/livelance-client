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
	};

	function handlePostJobClick() {
		navigate("/postjob");
	}

	return (
		<>
			<div>
				<h1
					style={{ textAlign: "center", fontSize: "24px", marginTop: "32px" }}
				>
					Post a Non-remote Freelancing Opportunity
				</h1>
			</div>
			<div style={postJobButtonContainerStyle}>
				<div style={postJobButtonStyle} onClick={handlePostJobClick}>
					<img src="/images/plus.jpg" alt=""></img>
				</div>
			</div>
		</>
	);
};

export default PostJob;
