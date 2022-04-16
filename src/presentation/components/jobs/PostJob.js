import React from "react";
import { useNavigate } from "react-router-dom";
import { PlusSmIcon as PlusSmIconOutline } from '@heroicons/react/outline'

const PostJob = () => {
	let navigate = useNavigate();

	const postJobButtonContainerStyle = {
		display: "flex",
		justifyContent: "center",
	};
	const postJobButtonStyle = {
		height: "200px",
		width: "200px",
		border: "2px solid gray",
		textAlign: "center",
		fontSize: "24px",
		cursor: "pointer",
	};

	function handlePostJobClick() {
		navigate("/postjob");
	}

	return (
		<>
			<div className="relative items-baseline grid justify-items-end mx-40 mt-10">
				<button
					onClick={handlePostJobClick}
					type="button"
					className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Post a Job
				</button>
			</div>

		</>
	);
};

export default PostJob;
