/* This example requires Tailwind CSS v2.0+ */
import { StarIcon } from "@heroicons/react/solid";
import ReviewsStatistics from "./ReviewsStatistics";
import ShareYourThoughts from "./ShareYourThoughts";

// the whole code below is for review on the profile screen
function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function ProfileScreenReviews({ reviewsList, reviewsData }) {
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
							{reviewsList.map((review) => (
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
											<p className="sr-only">{review.rating} out of 5 stars</p>
										</div>
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
export default ProfileScreenReviews;
