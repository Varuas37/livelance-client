import React, { useState } from "react";
import EditProfileModal from "../../pages/profile/EditProfileModal";
import WriteReviewForm from "./WriteReviewForm";
const WriteReview = () => {
	const [showWriteReviewForm, setShowWriteReviewForm] = useState(true);
	const writeReviewClicked = (e) => {
		e.preventDefault();
		setShowWriteReviewForm((prev) => !prev);
	};
	const getWriteReviewForm = () => {
		if (showWriteReviewForm) {
			return (
				<WriteReviewForm
					props={{
						toggle: showWriteReviewForm,
						setToggle: setShowWriteReviewForm,
					}}
				/>
			);
		}
	};
	return (
		<>
			{getWriteReviewForm()}
			{!showWriteReviewForm && (
				<div
					onClick={writeReviewClicked}
					className="cursor-pointer mt-6 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
				>
					Write a review
				</div>
			)}
		</>
	);
};

export default WriteReview;
