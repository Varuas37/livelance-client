import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import JobCard from "../../components/core/JobCard";
import { useDispatch } from "react-redux";
import {
	setFreelanceIdListByStatus,
	setFreelanceList,
} from "../../../application/redux/action/freelanceActions";
import { useSelector } from "react-redux";
import SortOptions from "../../components/sort/SortOptions";
import SearchAndProfileAvatar from "../../components/appheader/SearchAndProfileAvatar";
import { checkUser } from "../../../application/redux/action/authActions";
//temp

import { allUsersRoute, host } from "../../../application/redux/action/APIRoutes";



function Home() {
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
			//temp setting localstorage info
			const tempSignin = {
				email: "user10@gmail.com",
				password: "user10",
				_id: "624a011ddf00bf27080fc4ef",
				//__v:0,
			};

			const tempSignin1 = {
				email: "shivam@gmail.com",
				password: "user10",
				_id: "6238d4b791b08437f3b065a3",
				//__v:0,
			};




	useEffect(() => {
		const fetch = async () => {
			if (localStorage.LLtoken) {
				dispatch(checkUser());
				dispatch(setFreelanceIdListByStatus("Applied"));
				dispatch(setFreelanceIdListByStatus("Saved"));
				dispatch(setFreelanceList());

			//localStorage.setItem(
			//	process.env.REACT_APP_LOCALHOST_KEY,
			//	JSON.stringify(tempSignin)
			//  );


				  
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

						{/* Commenting Transition.Child below for testing */}
						{/* <Transition.Child
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
								<div className="mt-5 flex-1 h-0 overflow-y-auto">
									<nav className="px-2 space-y-1">
										{navigation.map((item) => (
											<Link
												key={item.name}
												to={item.href}
												className={classNames(
													item.current
														? "bg-gray-100 text-gray-900"
														: "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
													"group rounded-md py-2 px-2 flex items-center text-base font-medium"
												)}
											>
												<item.icon
													className={classNames(
														item.current
															? "text-gray-500"
															: "text-gray-400 group-hover:text-gray-500",
														"mr-4 flex-shrink-0 h-6 w-6"
													)}
													aria-hidden="true"
												/>
												{item.name}
											</Link>
										))}
									</nav>
								</div>
							</div>
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
											{/* Just for illustration. All these will come from database. */}
											{/* <Modal /> */}
											{appliedFreelanceIdList &&
												savedFreelanceIdList &&
												freelanceList &&
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
export default Home;
