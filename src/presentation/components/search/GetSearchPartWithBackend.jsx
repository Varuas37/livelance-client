import React, { useRef, useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import {
	searchQueries,
	searchQueryAndSetResultFreelanceList,
	setSearchTermsList,
} from "../../../application/redux/action/freelanceActions";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const GetSearchPartWithBackend = () => {
	let navigate = useNavigate();
	const [searchQueryTyped, setSearchQueryTyped] = useState("");

	let { query } = useParams();

	let dispatch = useDispatch();

	const handleKeyPressed = (e) => {
		e.preventDefault();
		if (e.key === "Enter") {
			navigate(`/search/${searchQueryTyped}`);
			dispatch(searchQueryAndSetResultFreelanceList(searchQueryTyped));
		}
	};

	useEffect(() => {
		if (query) {
			setSearchQueryTyped(query);
		}
	}, []);

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

export default GetSearchPartWithBackend;
