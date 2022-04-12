import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import MainApi from "../../../repository/MainApi";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
const EachReview = ({ review }) => {
	const [author, setAuthor] = useState();
	useEffect(() => {
		const fetch = async () => {
			try {
				const token = localStorage.LLtoken;
				const AuthStr = "Bearer ".concat(token);
				const response = await MainApi.get(`/profile/${review.authorId}`, {
					headers: { Authorization: AuthStr },
				});
				if (response.status === 200 || response.status === 201) {
					setAuthor(response.data.profile);
					return true;
				}
			} catch (err) {
				console.log(err.message);
			}
		};
		fetch();
	}, [review && review.authorId && review.authorId]);
	return (
		<div key={review._id} className="py-12">
			<div className="flex items-center">
				<img
					src={
						author && author.avatar && author.avatar !== "#"
							? author.avatar
							: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
					}
					alt={``}
					className="h-12 w-12 rounded-full"
				/>
				<div className="ml-4">
					<h4 className="text-sm font-bold text-gray-900">
						{author && author.firstName && author.firstName}{" "}
						{author && author.lastName && author.firstName}
					</h4>
					<div className="mt-1 flex items-center">
						{[0, 1, 2, 3, 4].map((rating) => (
							<StarIcon
								key={rating}
								className={classNames(
									review.rating > rating ? "text-yellow-400" : "text-gray-300",
									"h-5 w-5 flex-shrink-0"
								)}
								aria-hidden="true"
							/>
						))}
					</div>
					<p className="sr-only">{review.rating} out of 5 stars</p>
				</div>
			</div>

			<h5 className="text-sm font-bold text-gray-900">{review.title}</h5>
			<div
				className="mt-4 space-y-6 text-base italic text-gray-600"
				dangerouslySetInnerHTML={{ __html: review.content }}
			/>
		</div>
	);
};

export default EachReview;
