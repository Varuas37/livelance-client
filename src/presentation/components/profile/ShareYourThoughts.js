import React from "react";
import WriteReview from "./WriteReview";

const ShareYourThoughts = () => {
	
	return (
		<div className="mt-10">
			<h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
			<p className="mt-1 text-sm text-gray-600">
				If you’ve worked with them, share your thoughts with other people
			</p>

			<WriteReview/>
		</div>
	);
};

export default ShareYourThoughts;
