import React from "react";
import "./signupbutton.css";

const SignUpButton = ({ label }) => {
	return (
		<div data-testid="signup-button" className="signup-button-style">
			{label}
		</div>
	);
};

export default SignUpButton;
