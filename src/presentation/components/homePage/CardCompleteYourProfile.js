import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditProfileModal from "../../pages/profile/EditProfileModal";

const CardCompleteYourProfile = () => {
	const [isEditProfileCardClicked, setIsEditProfileCardClicked] =
		useState(false);

	// const profile = useSelector((state) => state.profileReducer.profile);
	// console.log(profile);

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
			{user && user.accountType === "freelancer" ? (
				user.categories.length > 0 &&
				user.subCategories.length > 0 &&
				user.skills.length > 0 ? (
					<div style={myStyle}>No jobs to show for your home feed</div>
				) : (
					<div style={myStyle} onClick={openEditProfileModal}>
						Complete your profile to see jobs on your home feed
					</div>
				)
			) : user && user.accountType === "employer" ? (
				user.categories.length > 0 && user.subCategories.length > 0 ? (
					<div style={myStyle}>No freelancers to show for your home feed</div>
				) : (
					<div style={myStyle} onClick={openEditProfileModal}>
						Complete your profile to see freelancers on your home feed
					</div>
				)
			) : (
				<></>
			)}
		</>
	);
};

export default CardCompleteYourProfile;
