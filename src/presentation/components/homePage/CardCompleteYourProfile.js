import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditProfileModal from "../../pages/profile/EditProfileModal";

const CardCompleteYourProfile = () => {
	const [isEditProfileCardClicked, setIsEditProfileCardClicked] =
		useState(false);

	const myStyle = {
		width: "360px",
		height: "128px",
		boxShadow: "4px 4px 2px #cdcdcd, -4px -4px 2px #cdcdcd",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontSize: "24px",
		cursor: "pointer",
	};

	const openEditProfileModal = (e) => {
		e.preventDefault();
		setIsEditProfileCardClicked(true);
	};

	const user = useSelector((state) => state.authReducer.user);

	return (
		<>
			{isEditProfileCardClicked && (
				<EditProfileModal
					setIsEditProfileCardClicked={setIsEditProfileCardClicked}
				/>
			)}
			<div style={myStyle} onClick={openEditProfileModal}>
				Complete your profile to see{" "}
				{user && user.accountType === "freelancer"
					? "jobs"
					: user.accountType === "employer"
					? "freelancers"
					: "items"}{" "}
				on your home feed
			</div>
		</>
	);
};

export default CardCompleteYourProfile;
