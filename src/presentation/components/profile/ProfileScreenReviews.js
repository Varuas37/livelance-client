/* This example requires Tailwind CSS v2.0+ */
import { StarIcon } from "@heroicons/react/solid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReviews } from "../../../application/redux/action/profileActions";
import EachReview from "./EachReview";
import ReviewsStatistics from "./ReviewsStatistics";
import ShareYourThoughts from "./ShareYourThoughts";

// the whole code below is for review on the profile screen
function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function ProfileScreenReviews({ id, reviewsData }) {
	const reviewsList = useSelector((state) => state.profileReducer.reviewsList);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setReviews(id));
	}, []);

	// const reviewsData
	return (
		<div className="bg-white">
			<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
				<div className="lg:col-span-4">
					{reviewsData && <ReviewsStatistics reviewsData={reviewsData} />}

					<ShareYourThoughts />
				</div>

				<div className="mt-16 lg:mt-0 lg:col-start-6 lg:col-span-7">
					<h3 className="sr-only">Recent reviews</h3>

					<div className="flow-root">
						<div className="-my-12 divide-y divide-gray-200">
							{reviewsList &&
								reviewsList.map((review) => (
									<EachReview key={review._id} review={review} />
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default ProfileScreenReviews;
