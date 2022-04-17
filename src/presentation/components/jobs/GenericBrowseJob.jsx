import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import GenericJobCard from "./GenericJobCard";
import NoButtonJobCard from "./freelancer/NoButtonJobCard";
import SearchAndProfileAvatar from "../appheader/SearchAndProfileAvatar";
// import GetMyJobsNavigation from "../../utils/GetMyJobsNavigation";
import JobsNavigation from "../../components/jobs/JobsNavigation";

function GenericBrowseJob({ props }) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const appliedFreelanceIdList = useSelector(
		(state) => state.freelanceReducer.appliedFreelanceIdList
	);
	const savedFreelanceIdList = useSelector(
		(state) => state.freelanceReducer.savedFreelanceIdList
	);

	// useEffect(() => {
	// 	setCurFreelanceList(props.dataList);
	// }, []);

	const { myJobType } = props;

	return (
		<>
			<div className="h-screen">
				<Transition.Root show={sidebarOpen} as={Fragment}>
					<Dialog
						as="div"
						className="fixed inset-0 z-40 flex md:hidden"
						onClose={setSidebarOpen}
					>
						<Transition.Child
							as={Fragment}
							enter="transition-opacity ease-linear duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
						</Transition.Child>
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<div className="relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col">
								<Transition.Child
									as={Fragment}
									enter="ease-in-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="ease-in-out duration-300"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<div className="absolute top-0 right-0 -mr-12 pt-2">
										<button
											type="button"
											className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
											onClick={() => setSidebarOpen(false)}
										>
											<span className="sr-only">Close sidebar</span>
											<XIcon
												className="h-6 w-6 text-white"
												aria-hidden="true"
											/>
										</button>
									</div>
								</Transition.Child>
								<div className="flex-shrink-0 px-4 flex items-center">
									<img
										className="h-8 w-auto"
										src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
										alt="Workflow"
									/>
								</div>
							</div>
						</Transition.Child>
						<div className="flex-shrink-0 w-14">
							{/* Dummy element to force sidebar to shrink to fit close icon */}
						</div>
					</Dialog>
				</Transition.Root>

				{/* <JobsNavigation /> */}
				<div className="md:pl-64">
					<div className="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
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
												props.dataList &&
												props.dataList.map((eachFreelance, idx) => {
													return myJobType === "denied" ||
														myJobType === "accepted" ? (
														<NoButtonJobCard
															key={idx}
															data={eachFreelance}
															myJobType={props.myJobType}
														/>
													) : (
														<GenericJobCard
															key={idx}
															data={eachFreelance}
															myJobType={props.myJobType}
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
}
export default GenericBrowseJob;
