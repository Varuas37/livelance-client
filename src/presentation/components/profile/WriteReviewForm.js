import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { submitReview } from "../../../application/redux/action/profileActions";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
const WriteReviewForm = ({ props }) => {
	const viewProfileId = useSelector(
		(state) => state.profileReducer.viewProfile.userProfileId
	);
	// const reviewsList = useSelector((state) => state.profileReducer.reviewsList);

	const userProfileId = useSelector(
		(state) => state.authReducer.user.userProfileId
	);

	// console.log(viewProfile);
	const [review, setReview] = useState({
		// postedOn: Date.now(),
		profileId: viewProfileId,
		authorId: userProfileId,
		title: "",
		content: "",
		rating: "",
	});
	const onHandleChange = (e) => {
		setReview({
			...review,
			[e.target.name]: e.target.value,
		});
	};
	let dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(submitReview(review));

		// reviewsList.push(review);
	};
	return (
		<div className="mt-8">
			<div className="mt-6">
				<form onSubmit={submitHandler} method="POST" className="space-y-6">
					<div className="flex flex-row md-flex-col space-x-5">
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Review Title
							</label>
							<div className="mt-1">
								<input
									name="title"
									value={review.title}
									onChange={(e) => onHandleChange(e)}
									type="text"
									required
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
							</div>
						</div>
					</div>

					<div className="flex flex-row md-flex-col space-x-5">
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Review Content
							</label>
							<div className="mt-1">
								<textarea
									name="content"
									value={review.content}
									onChange={(e) => onHandleChange(e)}
									type="text"
									required
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
							</div>
						</div>
					</div>

					<div>
						<label
							htmlFor="PayRange"
							className="block text-sm font-medium text-gray-700"
						>
							Rating
						</label>
						<div className="mt-1">
							<select
								name="rating"
								className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								value={review.rating}
								onChange={(e) => onHandleChange(e)}
								style={{ fontSize: "24px" }}
							>
								<option value="1">*</option>
								<option value="2">**</option>
								<option value="3">***</option>
								<option value="4">****</option>
								<option value="5">*****</option>
							</select>
						</div>
					</div>

					<button
						className="cursor-pointer m-8 mt-6 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
						type="submit"
					>
						Submit Review
					</button>
					<button
						onClick={() => {
							props.setToggle(!props.toggle);
						}}
						className="cursor-pointer mt-6 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
					>
						Cancel Review
					</button>
				</form>
			</div>
		</div>
	);
};

export default WriteReviewForm;
