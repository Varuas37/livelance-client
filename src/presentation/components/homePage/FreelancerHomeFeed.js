import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
<<<<<<< HEAD
<<<<<<<< HEAD:src/presentation/components/homePage/FreelancerHomeFeed.js
=======
>>>>>>> 136ff2e52a86e0c019e985bdfbc1942c0ba135fd
import JobCard from "../core/JobCard";
import { useDispatch } from "react-redux";
import {
	setFreelanceIdListByStatus,
	setFreelanceList,
} from "../../../application/redux/action/freelanceActions";
import { useSelector } from "react-redux";
import SortOptions from "../sort/SortOptions";
<<<<<<< HEAD
import SearchAndProfileAvatar from "../appheader/SearchAndProfileAvatar";
import { checkUser } from "../../../application/redux/action/authActions";

function FreelancerHomeFeed() {
========
import { XIcon } from "@heroicons/react/outline";
import OfferedJobCard from "../freelancer/OfferedJobCard";
import { useDispatch, useSelector } from "react-redux";
import { setFreelanceIdListByStatus } from "../../../../application/redux/action/freelanceActions";
import SearchAndProfileAvatar from "../../appheader/SearchAndProfileAvatar";
import JobsNavigation from "../JobsNavigation";

function BrowseOfferedJobs({ props }) {
>>>>>>>> 136ff2e52a86e0c019e985bdfbc1942c0ba135fd:src/presentation/components/jobs/freelancer/BrowseOfferedJobs.js
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [curFreelanceList, setCurFreelanceList] = useState([]);
	useEffect(() => {
<<<<<<<< HEAD:src/presentation/components/homePage/FreelancerHomeFeed.js
=======
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
>>>>>>> 136ff2e52a86e0c019e985bdfbc1942c0ba135fd
		const fetch = async () => {
			if (localStorage.LLtoken) {
				dispatch(setFreelanceIdListByStatus("Applied"));
				dispatch(setFreelanceIdListByStatus("Saved"));
				dispatch(setFreelanceList());
			}
		};
		fetch();
<<<<<<< HEAD
========
		setCurFreelanceList(props.dataList);
>>>>>>>> 136ff2e52a86e0c019e985bdfbc1942c0ba135fd:src/presentation/components/jobs/freelancer/BrowseOfferedJobs.js
=======
>>>>>>> 136ff2e52a86e0c019e985bdfbc1942c0ba135fd
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
<<<<<<< HEAD
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
=======
>>>>>>> 136ff2e52a86e0c019e985bdfbc1942c0ba135fd
						<div className="flex-shrink-0 w-14">
							{/* Dummy element to force sidebar to shrink to fit close icon */}
						</div>
					</Dialog>
				</Transition.Root>
<<<<<<< HEAD

				<SearchAndProfileAvatar
					universalDataList={props.dataList}
					dataList={curFreelanceList}
					setDataList={setCurFreelanceList}
					accountType={"freelancer"}
				/>
				<JobsNavigation />

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
											{
												// acceptedFreelanceIdList &&
												props.dataList &&
													props.dataList.map((eachFreelance) => {
														return (
															<OfferedJobCard
																key={eachFreelance._id}
																data={eachFreelance}
																myJobType={props.myJobType}
																// acceptedFreelanceIdList = {acceptedFreelanceIdList}
															/>
														);
													})
											}
=======
				<SearchAndProfileAvatarWithBackend />
				<div className="md:pl-64">
					<div className="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
						<span className="mt-10"></span>
						<SortOptions />
						<main className="flex-1">
							<div className="py-6">

								<div className="px-4 sm:px-6 md:px-0">
									{/* Start putting items*/}
									<ul role="list" className="space-y-3 mt-5 mb-5">
										{/* For the list of Jobs Map the JobCard Here */}
										<div className="bg-white overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
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
>>>>>>> 136ff2e52a86e0c019e985bdfbc1942c0ba135fd

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
<<<<<<< HEAD
<<<<<<<< HEAD:src/presentation/components/homePage/FreelancerHomeFeed.js
export default FreelancerHomeFeed;
========
export default BrowseOfferedJobs;
>>>>>>>> 136ff2e52a86e0c019e985bdfbc1942c0ba135fd:src/presentation/components/jobs/freelancer/BrowseOfferedJobs.js
=======
export default FreelancerHomeFeed;
>>>>>>> 136ff2e52a86e0c019e985bdfbc1942c0ba135fd
