import React from "react";
import SortOptions from "../sort/SortOptions";
import SearchAndProfileAvatar from "./SearchAndProfileAvatar";

const AppHeader = () => {
	return (
		<div className="md:pl-64">
			<div className="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
				<SearchAndProfileAvatar />
				<SortOptions />
			</div>
		</div>
	);
};

export default AppHeader;
