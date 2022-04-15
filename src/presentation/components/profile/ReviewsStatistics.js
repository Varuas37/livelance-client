import { StarIcon } from "@heroicons/react/solid";
import React from "react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
const ReviewsStatistics = ({ reviewsData }) => {
	return (
		<>
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
									reviewsData.average > rating
										? "text-yellow-400"
										: "text-gray-300",
									"flex-shrink-0 h-5 w-5"
								)}
								aria-hidden="true"
							/>
						))}
					</div>
					<p className="sr-only">{reviewsData.average} out of 5 stars</p>
				</div>
				<p className="ml-2 text-sm text-gray-900">
					Based on {reviewsData.totalCount} reviews
				</p>
			</div>
			<div className="mt-6">
				<h3 className="sr-only">Review data</h3>

				<dl className="space-y-3">
					{reviewsData.counts.map((count) => (
						<div key={count.rating} className="flex items-center text-sm">
							<dt className="flex-1 flex items-center">
								<p className="w-3 font-medium text-gray-900">
									{count.rating}
									<span className="sr-only"> star reviews</span>
								</p>
								<div
									aria-hidden="true"
									className="ml-1 flex-1 flex items-center"
								>
									<StarIcon
										className={classNames(
											count.count > 0 ? "text-yellow-400" : "text-gray-300",
											"flex-shrink-0 h-5 w-5"
										)}
										aria-hidden="true"
									/>

									<div className="ml-3 relative flex-1">
										<div className="h-3 bg-gray-100 border border-gray-200 rounded-full" />
										{count.count > 0 ? (
											<div
												className="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
												style={{
													width: `calc(${count.count} / ${reviewsData.totalCount} * 100%)`,
												}}
											/>
										) : null}
									</div>
								</div>
							</dt>
							<dd className="ml-3 w-10 text-right tabular-nums text-sm text-gray-900">
								{Math.round((count.count / reviewsData.totalCount) * 100)}%
							</dd>
						</div>
					))}
				</dl>
			</div>
		</>
	);
};

export default ReviewsStatistics;
