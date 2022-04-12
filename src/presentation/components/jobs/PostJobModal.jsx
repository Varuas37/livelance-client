import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HandleJobSkillsList from "./HandleJobSkillsList";
import { setPostedFreelance } from "../../../application/redux/action/freelanceActions";

function PostJobModal() {
	const [postFreelance, setPostFreelance] = useState({
		postedBy: "",
		postedOn: Date.now().toString(),
		jobTitle: "",
		jobDescription: "",
		category: "",
		subCategory: "",
		skills: [],
		duration: "1 hr",
		// startDate: "",
		// startTime: "",
		rate: "",
		rateDuration: "hour",
		location: "",
		city: "",
		state: "",
		zipcode: "",
	});

	const [open, setOpen] = useState(true);

	const [freelanceDurationNumber, setfreelanceDurationNumber] = useState("1");
	const [durationUnit, setDurationUnit] = useState("hr");
	const [skillsList, setSkillsList] = useState([]);
	const cancelButtonRef = useRef(null);

	const user = useSelector((state) => state.authReducer.user);
	const dispatch = useDispatch();
	const didMountRef = useRef(false);
	useEffect(() => {
		setPostFreelance({
			...postFreelance,
			postedBy: user.userId,
		});
	}, [user]);

	let navigate = useNavigate();
	const modalClick = () => {
		setOpen(!open);
		navigate(`/postedjobs`);
	};
	const saveButtonClicked = (e) => {
		e.preventDefault();

		dispatch(setPostedFreelance(postFreelance));
		setOpen(!open);
		navigate(`/postedjobs`);
	};

	const onHandleChange = (e) => {
		if (e.target.name === "freelanceDurationNumber") {
			setfreelanceDurationNumber(e.target.value);
			setPostFreelance({
				...postFreelance,
				duration: e.target.value + " " + durationUnit,
			});
		} else if (e.target.name === "durationUnit") {
			setDurationUnit(e.target.value);
			setPostFreelance({
				...postFreelance,
				duration: freelanceDurationNumber + " " + e.target.value,
			});
		}
		// else if (e.target.name === "PayAmount") {
		// 	setPayAmount(e.target.value);
		// 	setPostFreelance({
		// 		...postFreelance,
		// 		rate: "$" + e.target.value + "/" + payPeriod,
		// 	});
		// } else if (e.target.name === "period") {
		// 	setPayPeriod(e.target.value);
		// 	setPostFreelance({
		// 		...postFreelance,
		// 		rate: "$" + payAmount + "/" + e.target.value,
		// 	});
		// }
		else {
			setPostFreelance({
				...postFreelance,
				[e.target.name]: e.target.value,
			});
		}
	};

	return (
		<div>
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="fixed z-10 inset-0 overflow-y-auto"
					initialFocus={cancelButtonRef}
					onClose={modalClick}
				>
					<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span
							className="hidden sm:inline-block sm:align-middle sm:h-screen"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
								<div>
									<div className="mt-3  sm:mt-5">
										<Dialog.Title
											as="h3"
											className="text-lg text-center leading-6 font-medium text-gray-900"
										>
											Post a Non-remote Freelance
										</Dialog.Title>

										<div className="mt-8">
											<div className="mt-6">
												<form action="#" method="POST" className="space-y-6">
													<div className="flex flex-row md-flex-col space-x-5">
														<div>
															<label className="block text-sm font-medium text-gray-700">
																Freelance Title
															</label>
															<div className="mt-1">
																<input
																	name="jobTitle"
																	value={postFreelance.jobTitle}
																	onChange={(e) => onHandleChange(e)}
																	type="text"
																	required
																	className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
																/>
															</div>
														</div>
													</div>
													<div className="flex flex-row md-flex-col space-x-5">
														<div>
															<label className="block text-sm font-medium text-gray-700">
																Freelance Description
															</label>
															<div className="mt-1">
																<input
																	name="jobDescription"
																	value={postFreelance.jobDescription}
																	onChange={(e) => onHandleChange(e)}
																	type="text"
																	required
																	className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
																/>
															</div>
														</div>
													</div>
													<div className="flex flex-row md-flex-col space-x-5">
														<div>
															<label className="block text-sm font-medium text-gray-700">
																Freelance Category
															</label>
															<div className="mt-1">
																<input
																	name="category"
																	value={postFreelance.category}
																	onChange={(e) => onHandleChange(e)}
																	type="text"
																	required
																	className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
																/>
															</div>
														</div>
													</div>
													<div className="flex flex-row md-flex-col space-x-5">
														<div>
															<label className="block text-sm font-medium text-gray-700">
																Freelance Sub-Category
															</label>
															<div className="mt-1">
																<input
																	name="subCategory"
																	value={postFreelance.subCategory}
																	onChange={(e) => onHandleChange(e)}
																	type="text"
																	required
																	className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
																/>
															</div>
														</div>
													</div>

													<label
														htmlFor="PayRange"
														className="block text-sm font-medium text-gray-700"
													>
														Skills
													</label>
													<HandleJobSkillsList
														props={{
															mutableObject: postFreelance,
															setMutableObject: setPostFreelance,
															skillsList: skillsList,
															setSkillsList: setSkillsList,
															columnName: "skills",
														}}
													/>

													<div>
														<label
															htmlFor="PayRange"
															className="block text-sm font-medium text-gray-700"
														>
															Duration
														</label>
														<div className="mt-1">
															<input
																id="freelanceDurationNumber"
																name="freelanceDurationNumber"
																type="text"
																onChange={(e) => onHandleChange(e)}
																value={freelanceDurationNumber}
																required
																className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
															/>

															<select
																id="durationUnit"
																name="durationUnit"
																className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
																value={durationUnit}
																onChange={(e) => onHandleChange(e)}
															>
																<option value="hour">hour</option>
																<option value="week">week</option>
																<option value="project">project</option>
																<option value="month">month</option>
															</select>
														</div>
													</div>

													<div>
														<label
															htmlFor="PayRange"
															className="block text-sm font-medium text-gray-700"
														>
															Rate
														</label>
														<div className="mt-1">
															$
															<input
																id="PayAmount"
																name="rate"
																type="text"
																onChange={(e) => onHandleChange(e)}
																value={postFreelance.rate}
																autoComplete="PayAmount"
																required
																className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
															/>
															<label className="block text-sm font-sm text-gray-700">
																Per
															</label>
															<select
																id="period"
																name="rateDuration"
																className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
																value={postFreelance.rateDuration}
																onChange={(e) => onHandleChange(e)}
															>
																<option value="hour">hour</option>
																<option value="week">week</option>
																<option value="project">project</option>
																<option value="month">month</option>
															</select>
														</div>
													</div>

													<div className="flex flex-row md-flex-col space-x-5">
														<div>
															<label className="block text-sm font-medium text-gray-700">
																Freelance Location
															</label>
															<div className="mt-1">
																<input
																	name="location"
																	value={postFreelance.location}
																	onChange={(e) => onHandleChange(e)}
																	type="text"
																	required
																	className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
																/>
															</div>
														</div>
													</div>
													<div className="flex flex-row md-flex-col space-x-5">
														<div>
															<label className="block text-sm font-medium text-gray-700">
																Freelance City
															</label>
															<div className="mt-1">
																<input
																	name="city"
																	value={postFreelance.city}
																	onChange={(e) => onHandleChange(e)}
																	type="text"
																	required
																	className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
																/>
															</div>
														</div>
													</div>
													<div className="flex flex-row md-flex-col space-x-5">
														<div>
															<label className="block text-sm font-medium text-gray-700">
																Freelance State
															</label>
															<div className="mt-1">
																<input
																	name="state"
																	value={postFreelance.state}
																	onChange={(e) => onHandleChange(e)}
																	type="text"
																	required
																	className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
																/>
															</div>
														</div>
													</div>
													<div className="flex flex-row md-flex-col space-x-5">
														<div>
															<label className="block text-sm font-medium text-gray-700">
																Freelance Zipcode
															</label>
															<div className="mt-1">
																<input
																	name="zipcode"
																	value={postFreelance.zipcode}
																	onChange={(e) => onHandleChange(e)}
																	type="text"
																	required
																	className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
																/>
															</div>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
								<div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
									<button
										type="button"
										className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
										onClick={(e) => saveButtonClicked(e)}
									>
										Save
									</button>
									<button
										type="button"
										className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
										onClick={() => modalClick()}
										ref={cancelButtonRef}
									>
										Cancel
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</div>
	);
}
export default PostJobModal;
