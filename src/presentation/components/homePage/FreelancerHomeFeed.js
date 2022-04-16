import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import JobCard from "../core/JobCard";
import { useDispatch } from "react-redux";
import {
	setFreelanceIdListByStatus,
	setFreelanceList,
} from "../../../application/redux/action/freelanceActions";
import { useSelector } from "react-redux";
import SortOptions from "../sort/SortOptions";
import SearchAndProfileAvatarWithBackend from "../appheader/SearchAndProfileAvatarWithBackend";
import CardCompleteYourProfile from "./CardCompleteYourProfile";
import Banner from "../banner/Banner";

function FreelancerHomeFeed() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const freelanceList = useSelector(
		(state) => state.freelanceReducer.freelanceList
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
				dispatch(setFreelanceList());
			}
		};
		fetch();
	}, []);

	return (
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

				<SearchAndProfileAvatarWithBackend />
				<div className="md:pl-64">
					<div className="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
						<SortOptions />

						<main className="flex-1">
							<div className="py-6">
								{/* <div className="px-4 sm:px-6 md:px-0">
                                    <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                                </div> */}
								<Banner alert={"Your Profile is not complete"} buttonText={"Setup Profile"} link={"/profile"} />
								<div>
								</div>
								<div className="px-4 sm:px-6 md:px-0">
									{/* Start putting items*/}
									<ul role="list" className="space-y-3 mt-10">
										{/* For the list of Jobs Map the JobCard Here */}
										<div className="bg-white  overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
											{/* Just for illustration. All these will come from database. */}
											{/* <Modal /> */}
											{appliedFreelanceIdList &&
											savedFreelanceIdList &&
											freelanceList &&
											freelanceList.length > 0 ? (
												freelanceList.map((eachFreelance) => {
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
												})
											) : (
												<CardCompleteYourProfile />
											)}

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
}
export default FreelancerHomeFeed;
