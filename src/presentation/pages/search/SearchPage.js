import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SearchAndProfileAvatar from "../../components/appheader/SearchAndProfileAvatar";
import SortOptions from "../../components/sort/SortOptions";
import { Dialog, Transition } from "@headlessui/react";
import {
	searchQueryAndSetResultFreelanceList,
	setFreelanceIdListByStatus,
} from "../../../application/redux/action/freelanceActions";
import JobCard from "../../components/core/JobCard";

const SearchPage = () => {
	let { query } = useParams();
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const searchQueryResultFreelanceList = useSelector(
		(state) => state.freelanceReducer.searchQueryResultFreelanceList
	);
	const appliedFreelanceIdList = useSelector(
		(state) => state.freelanceReducer.appliedFreelanceIdList
	);
	const savedFreelanceIdList = useSelector(
		(state) => state.freelanceReducer.savedFreelanceIdList
	);

	const dispatch = useDispatch();

	useEffect(() => {
		const fetch = async () => {
			if (localStorage.LLtoken) {
				dispatch(setFreelanceIdListByStatus("Applied"));
				dispatch(setFreelanceIdListByStatus("Saved"));
				dispatch(searchQueryAndSetResultFreelanceList(query));
				// dispatch(setFreelanceList());
			}
		};
		fetch();
	}, []);
	// const searchQueryList = useSelector(
	// 	(state) => state.freelanceReducer.searchQueryList
	// );

	// console.log(searchQueryList);

	return (
		// <>
		// 	<>
		// 		<div className="h-screen">
		// 			<SearchAndProfileAvatar />
		// 			<div className="md:pl-64">
		// 				<div className="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
		// 					<SortOptions />
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</>
		// </>
		<>
			<div className="h-screen">
				<Transition.Root show={sidebarOpen} as={Fragment}>
					<Dialog
						as="div"
						className="fixed inset-0 z-40 flex md:hidden"
						onClose={setSidebarOpen}
					>
						<div className="flex-shrink-0 w-14">
							{/* Dummy element to force sidebar to shrink to fit close icon */}
						</div>
					</Dialog>
				</Transition.Root>

				<SearchAndProfileAvatar />
				<div className="md:pl-64">
					<div className="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
						{/* <SortOptions /> */}

						<main className="flex-1">
							<div className="py-6">
								{/* <div className="px-4 sm:px-6 md:px-0">
                                    <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                                </div> */}
								<div className="px-4 sm:px-6 md:px-0">
									{/* Start putting items*/}
									<ul role="list" className="space-y-3 mt-10">
										{/* For the list of Jobs Map the JobCard Here */}
										<div className="bg-white  overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
											{/* Just for illustration. All these will come from database. */}
											{/* <Modal /> */}
											{appliedFreelanceIdList &&
												savedFreelanceIdList &&
												searchQueryResultFreelanceList &&
												searchQueryResultFreelanceList.map((eachFreelance) => {
													return (
														<JobCard
															key={eachFreelance._id}
															data={eachFreelance}
															appliedFreelanceIdList={
																appliedFreelanceIdList.Applied
															}
															savedFreelanceIdList={savedFreelanceIdList.Saved}
														/>
													);
												})}

											{/* {listofdata.map((data) => <>
                                                <JobCard data={data} />
                                            </>)} */}
										</div>
									</ul>

									{/* /End replace */}
								</div>
							</div>
						</main>
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchPage;
