import React from "react";

const Onboarding = () => {
	const onBoardingTitle = {
		fontSize: "32px",
		textAlign: "center",
	};
	return (
		<>
			<h1 style={onBoardingTitle}>Onboarding</h1>
			<div className="flex justify-center">
				<a
					href="#"
					className="mt-6 inline-flex  bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50  w-1000"
				>
					Skills
				</a>
			</div>

			<div className="flex justify-center">
				<a
					href="#"
					className="mt-6 inline-flex  bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50  w-1000"
				>
					Location
				</a>
			</div>
		</>
	);
};

export default Onboarding;
