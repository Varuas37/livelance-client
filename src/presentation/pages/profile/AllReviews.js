/* This example requires Tailwind CSS v2.0+ */
import { StarIcon } from "@heroicons/react/solid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReviews } from "../../../application/redux/action/profileActions";
import ReviewsStatistics from "../../components/profile/ReviewsStatistics";
import ShareYourThoughts from "../../components/profile/ShareYourThoughts";

// the whole code below is for review on the reviews screen
const reviews = {
	average: 4,
	totalCount: 1624,
	counts: [
		{ rating: 5, count: 1019 },
		{ rating: 4, count: 162 },
		{ rating: 3, count: 97 },
		{ rating: 2, count: 199 },
		{ rating: 1, count: 147 },
	],
};

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function AllReviews() {
	const reviewsList = useSelector((state) => state.profileReducer.reviews);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setReviews());
	}, []);
	return (
		<div className="bg-white">
			<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
				<div className="lg:col-span-4">
					<h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
						Reviews
					</h2>

					<div className="mt-3 flex items-center">
						<div>
							<div className="flex items-center">
								{[0, 1, 2, 3, 4].map((rating) => (
									<StarIcon
										key={rating}
										className={classNames(
											reviews.average > rating
												? "text-yellow-400"
												: "text-gray-300",
											"flex-shrink-0 h-5 w-5"
										)}
										aria-hidden="true"
									/>
								))}
							</div>
							<p className="sr-only">{reviews.average} out of 5 stars</p>
						</div>
						<p className="ml-2 text-sm text-gray-900">
							Based on {reviews.totalCount} reviews
						</p>
					</div>

					{reviews && <ReviewsStatistics reviews={reviews} />}

					<ShareYourThoughts />
				</div>

				<div className="mt-16 lg:mt-0 lg:col-start-6 lg:col-span-7">
					<h3 className="sr-only">Recent reviews</h3>

					<div className="flow-root">
						<div className="-my-12 divide-y divide-gray-200">
							{reviewsList &&
								reviewsList.map((review) => (
									<div key={review.id} className="py-12">
										<div className="flex items-center">
											<img
												src={review.avatarSrc}
												alt={`${review.author}.`}
												className="h-12 w-12 rounded-full"
											/>
											<div className="ml-4">
												<h4 className="text-sm font-bold text-gray-900">
													{review.author}
												</h4>

												<div className="mt-1 flex items-center">
													{[0, 1, 2, 3, 4].map((rating) => (
														<StarIcon
															key={rating}
															className={classNames(
																review.rating > rating
																	? "text-yellow-400"
																	: "text-gray-300",
																"h-5 w-5 flex-shrink-0"
															)}
															aria-hidden="true"
														/>
													))}
												</div>
												<p className="sr-only">
													{review.rating} out of 5 stars
												</p>
											</div>
										</div>
										<div style={{ margin: "16px 0 -16px 0" }}>
											<h4 className="text-sm font-bold text-gray-900">
												{review.title}
											</h4>
										</div>
										<div
											className="mt-4 space-y-6 text-base italic text-gray-600"
											dangerouslySetInnerHTML={{ __html: review.content }}
										/>
									</div>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default AllReviews;
