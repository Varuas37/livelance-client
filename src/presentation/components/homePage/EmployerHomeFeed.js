import React from "react";
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
import SearchAndProfileAvatar from "../appheader/SearchAndProfileAvatar";
import { checkUser } from "../../../application/redux/action/authActions";
import { setFreelancersListForHomeFeed } from "../../../application/redux/action/employerActions";
import FreelancerCardHomeFeed from "./FreelancerCardHomeFeed";
import CardCompleteYourProfile from "./CardCompleteYourProfile";

const EmployerHomeFeed = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const freelancersListForHomePage = useSelector(
		(state) => state.freelanceReducer.freelancersListForHomePage
	);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetch = async () => {
			if (localStorage.LLtoken) {
				dispatch(setFreelancersListForHomeFeed());
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
						{/* Commenting Transition.Child below for testing */}
						{/* <Transition.Child
							as={Fragment}
							enter="transition-opacity ease-linear duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
						</Transition.Child> */}

						<div className="flex-shrink-0 w-14">
							{/* Dummy element to force sidebar to shrink to fit close icon */}
						</div>
					</Dialog>
				</Transition.Root>

				<SearchAndProfileAvatar />
				<div className="md:pl-64">
					<div className="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
						<SortOptions />

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
											{freelancersListForHomePage &&
											freelancersListForHomePage.length > 0 ? (
												freelancersListForHomePage.map((eachFreelancer) => {
													return (
														<FreelancerCardHomeFeed
															key={eachFreelancer._id}
															data={eachFreelancer}
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
};

export default EmployerHomeFeed;
