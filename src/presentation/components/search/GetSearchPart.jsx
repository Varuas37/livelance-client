import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";

const GetSearchPart = ({
	universalDataList,
	dataList,
	setDataList,
	accountType,
}) => {
	const [searchQueryTyped, setSearchQueryTyped] = useState("");

	const handleKeyPressed = (e) => {
		e.preventDefault();
		if (accountType === "freelancer") {
			if (universalDataList) {
				setDataList(
					universalDataList.filter(
						(each) =>
							each.jobId &&
							each.jobId.jobTitle
								.toLowerCase()
								.includes(searchQueryTyped.toLowerCase())
					)
				);
			}
		} else if (accountType === "employer") {
			if (universalDataList) {
				setDataList(
					universalDataList.filter(
						(each) =>
							(each.categories &&
								each.categories.some((elem) => {
									if (
										elem.toLowerCase().includes(searchQueryTyped.toLowerCase())
									) {
										return true;
									}
									return false;
								})) ||
							(each.skills &&
								each.skills.some((elem) => {
									if (
										elem.toLowerCase().includes(searchQueryTyped.toLowerCase())
									) {
										return true;
									}
									return false;
								}))
					)
				);
			}
		}
	};

	return (
		<>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<div className="flex-1 flex justify-between px-4 md:px-0">
					<div className="flex-1 flex">
						<label htmlFor="search-field" className="sr-only">
							Search
						</label>
						<div className="relative w-full text-gray-400 focus-within:text-gray-600">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
								<SearchIcon className="h-5 w-5" aria-hidden="true" />
							</div>
							<input
								id="search-field"
								className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
								placeholder="Search"
								name="ZipCode"
								value={searchQueryTyped}
								onChange={(e) => setSearchQueryTyped(e.target.value)}
								onKeyUp={(e) => handleKeyPressed(e)}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default GetSearchPart;
