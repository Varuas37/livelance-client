import React from "react";
import { useSelector } from "react-redux";
import SearchAndProfileAvatar from "../../components/appheader/SearchAndProfileAvatar";
import SortOptions from "../../components/sort/SortOptions";

const SearchPage = () => {
	const searchQueryList = useSelector(
		(state) => state.freelanceReducer.searchQueryList
	);

	console.log(searchQueryList);
  
	return (
		<>
			<>
				<div className="h-screen">
					<SearchAndProfileAvatar searchTermList={searchQueryList} />
					<div className="md:pl-64">
						<div className="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
							<SortOptions />
						</div>
					</div>
				</div>
			</>
		</>
	);
};

export default SearchPage;
