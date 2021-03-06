import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	setFreelanceById,
	setFreelanceIdListByStatus,
	setFreelanceList,
} from "../../../application/redux/action/freelanceActions";
import {
	editAndSetProfile,
	getProfile,
	setProfile,
} from "../../../application/redux/action/profileActions";
import HandleSkills from "../../components/profile/HandleSkills";
import ImageHandler from "../../utils/ImageHandler";
import { setFreelancersListForHomeFeed } from "../../../application/redux/action/employerActions";
import HandleOptionSelected from "../../components/jobs/HandleOptionSelected";
import HandleSubOptionSelected from "../../components/jobs/HandleSubOptionSelected";

function EditProfileModal({ setIsEditProfileCardClicked }) {
	const [open, setOpen] = useState(true);
	const [editProfile, setEditProfile] = useState({});
	const [payAmount, setPayAmount] = useState("0");
	const [payPeriod, setPayPeriod] = useState("hr");
	const [skillsList, setSkillsList] = useState([]);
	const cancelButtonRef = useRef(null);
	const [optionSelected, setOptionSelected] = useState("");

	const profile = useSelector((state) => state.profileReducer.profile);
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.authReducer.user);

	useEffect(() => {
		setEditProfile(profile);
		const payRange = profile && profile.fields && profile.fields.PayRange;
		setPayAmount(
			payRange && payRange.split("/")[0].substring(payRange.indexOf("$") + 1)
		);
		setPayPeriod(payRange && payRange.split("/")[1]);
		setSkillsList(
			profile && profile.fields && profile.fields.Skills.split(",")
		);
	}, [profile]);

	useEffect(() => {
		dispatch(getProfile());
	}, []);

	const location = useLocation();
	const saveButtonClicked = (e) => {
		e.preventDefault();
		dispatch(setProfile(editProfile));
		setOpen(!open);
		setIsEditProfileCardClicked(false);
		// if (location.pathname === "/home") {
		// 	if (
		// 		currentUser &&
		// 		currentUser.accountType &&
		// 		currentUser.accountType === "freelancer"
		// 	) {
		// 		if (localStorage.LLtoken) {
		// 			dispatch(setFreelanceIdListByStatus("Applied"));
		// 			dispatch(setFreelanceIdListByStatus("Saved"));
		// 			dispatch(setFreelanceList());
		// 		}
		// 	} else if (
		// 		currentUser &&
		// 		currentUser.accountType &&
		// 		currentUser.accountType === "employer"
		// 	) {
		// 		if (localStorage.LLtoken) {
		// 			dispatch(setFreelancersListForHomeFeed());
		// 		}
		// 	}
		// }
		// navigate("/");
		// navigate(location.pathname);
		if (location.pathname === "/home") {
			window.location.reload(false);
		}
	};

	const onHandleChange = (e) => {
		const fieldList = ["Email", "Title", "Location", "ZipCode"];

		if (fieldList.includes(e.target.name)) {
			setEditProfile({
				...editProfile,
				fields: {
					...editProfile.fields,
					[e.target.name]: e.target.value,
				},
			});
		} else if (e.target.name === "PayAmount") {
			setPayAmount(e.target.value);
			setEditProfile({
				...editProfile,
				fields: {
					...editProfile.fields,
					PayRange: "$" + e.target.value + "/" + payPeriod,
				},
			});
		} else if (e.target.name === "period") {
			setPayPeriod(e.target.value);
			setEditProfile({
				...editProfile,
				fields: {
					...editProfile.fields,
					PayRange: "$" + payAmount + "/" + e.target.value,
				},
			});
		} else {
			setEditProfile({
				...editProfile,
				[e.target.name]: e.target.value,
			});
		}
	};

	let navigate = useNavigate();
	const modalClick = () => {
		setOpen(!open);
		// navigate(`/profile`);
		setIsEditProfileCardClicked(false);
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
											className="cursor-pointer text-lg text-center leading-6 font-medium text-gray-900"
										>
											Edit Profile
										</Dialog.Title>

										{editProfile && (
											<div className="mt-8">
												<div className="mt-6">
													<form action="#" method="POST" className="space-y-6">
														<div>
															<label className="block text-sm font-medium text-gray-700">
																Profile Picture
															</label>

															<ImageHandler
																props={{
																	sectionMediaTitle: "Change Above Image",
																	sectionMediaValue: editProfile,
																	setSectionMediaLink: setEditProfile,
																	columnName: "avatar",
																}}
															/>
														</div>

														<div>
															<label className="block text-sm font-medium text-gray-700">
																Cover Picture
															</label>

															<ImageHandler
																props={{
																	sectionMediaTitle: "Change Above Image",
																	sectionMediaValue: editProfile,
																	setSectionMediaLink: setEditProfile,
																	columnName: "coverImage",
																}}
															/>
														</div>
														<div className="flex flex-row md-flex-col space-x-5">
															<div>
																<label className="block text-sm font-medium text-gray-700">
																	First Name
																</label>
																<div className="mt-1">
																	<input
																		id="firstName"
																		name="firstName"
																		value={
																			editProfile.firstName
																				? editProfile.firstName
																				: ""
																		}
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
																	Last Name
																</label>
																<div className="mt-1">
																	<input
																		name="lastName"
																		value={
																			editProfile.lastName
																				? editProfile.lastName
																				: ""
																		}
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
																	Gender
																</label>
																<div className="mt-1">
																	<select
																		id="gender"
																		name="gender"
																		value={
																			editProfile.gender
																				? editProfile.gender
																				: ""
																		}
																		onChange={(e) => onHandleChange(e)}
																		className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
																	>
																		<option value="" disabled>
																			Select
																		</option>
																		<option value="Man">Man</option>
																		<option value="Woman">Woman</option>
																		<option value="Other">Other</option>
																	</select>
																</div>
															</div>
														</div>
														<div>
															<label
																htmlFor="about"
																className="block text-sm font-medium text-gray-700"
															>
																About
															</label>
															<div className="mt-1">
																<textarea
																	rows={4}
																	id="about"
																	name="about"
																	type="text"
																	onChange={(e) => onHandleChange(e)}
																	value={
																		editProfile.about ? editProfile.about : ""
																	}
																	autoComplete="about"
																	required
																	className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
																/>
															</div>
														</div>
														<div>
															<label
																htmlFor="Email"
																className="block text-sm font-medium text-gray-700"
															>
																Contact Number
															</label>
															<div className="mt-1">
																<input
																	name="contactNumber"
																	type="text"
																	onChange={(e) => onHandleChange(e)}
																	value={
																		editProfile.contactNumber
																			? editProfile.contactNumber
																			: ""
																	}
																	autoComplete="Email"
																	required
																	className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
																/>
															</div>
														</div>

														{currentUser &&
															currentUser.accountType &&
															currentUser.accountType !== "employer" && (
																<>
																	<label
																		htmlFor="PayRange"
																		className="block text-sm font-medium text-gray-700"
																	>
																		Skills
																	</label>
																	<HandleSkills
																		props={{
																			mutableObject: editProfile,
																			setMutableObject: setEditProfile,
																			field: "skills",
																		}}
																	/>
																</>
															)}
														<>
															<label
																htmlFor="PayRange"
																className="block text-sm font-medium text-gray-700"
															>
																Categories
															</label>
															{/* <HandleSkills
																props={{
																	mutableObject: editProfile,
																	setMutableObject: setEditProfile,
																	field: "categories",
																}}
															/> */}
															<HandleOptionSelected
																props={{
																	mutableObject: editProfile,
																	setMutableObject: setEditProfile,
																	columnName: "categories",
																	optionSelected: optionSelected,
																	setOptionSelected: setOptionSelected,
																}}
															/>
														</>
														<>
															<label
																htmlFor="PayRange"
																className="block text-sm font-medium text-gray-700"
															>
																Sub-Categories
															</label>
															{/* <HandleSkills
																props={{
																	mutableObject: editProfile,
																	setMutableObject: setEditProfile,
																	field: "subCategories",
																}}
															/> */}
															<HandleSubOptionSelected
																props={{
																	mutableObject: editProfile,
																	setMutableObject: setEditProfile,

																	columnName: "subCategories",
																	keyName: "categories",
																	optionSelected: optionSelected,
																}}
															/>
														</>
													</form>
												</div>
											</div>
										)}
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
export default EditProfileModal;
