/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFreelanceById } from "../../../application/redux/action/freelanceActions";
import MainApi from "../../../repository/MainApi";
import { MailIcon, PhoneIcon, PencilIcon } from "@heroicons/react/solid";
import { setViewProfile } from "../../../application/redux/action/profileActions";

function ViewProfileModal({ id, setIsProfileAvatarClicked }) {
	const [open, setOpen] = useState(true);
	// console.log(id);
	const cancelButtonRef = useRef(null);
	// const [profile, setProfile] = useState();

	const profile = useSelector((state) => state.profileReducer.viewProfile);

	const modalClick = () => {
		setIsProfileAvatarClicked(false);
		setOpen(!open);
	};

	let navigate = useNavigate();
	const viewCompleteProfile = (e) => {
		e.preventDefault();
		navigate(`/viewprofile/${id}`);
	};

	let dispatch = useDispatch();
	useEffect(() => {
		dispatch(setViewProfile(id));
	}, []);

	return (
		<div>
			{profile && (
				<Transition.Root onClick={modalClick} show={open} as={Fragment}>
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
											<div>
												<img
													className="h-32 w-96 m-4"
													src={profile.coverImage && profile.coverImage}
													alt="Workflow"
												/>
											</div>
											<div>
												<img
													className="h-32 w-32"
													src={profile.avatar && profile.avatar}
													alt="Workflow"
												/>
											</div>
											<Dialog.Title
												as="h3"
												className="text-lg text-center leading-6 font-medium text-gray-900"
											>
												{profile.firstName && profile.firstName}{" "}
												{profile.lastName && profile.lastName}
												{/* {profile.jobTitle && profile.jobTitle} */}
											</Dialog.Title>

											<div className="mt-2">
												<p className="mt-2 text-gray-600">
													{/* {profile.jobDescription &&
													profile.jobDescription} */}
													{profile.about && profile.about}
												</p>
											</div>
											<div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
												<Link
													to={`#`}
													// to={`/coolchat/${profile.fields.Email}`}
													className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
												>
													<MailIcon
														className="-ml-1 mr-2 h-5 w-5 text-gray-400"
														aria-hidden="true"
													/>
													<span>Message</span>
												</Link>
												<Link
													to={`#`}
													// to={`/coolchat/${profile.fields.Email}`}
													className="inline-flex justify-center px-4 py-2  shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
												>
													<PhoneIcon
														className="-ml-1 mr-2 h-5 w-5 text-gray-400"
														aria-hidden="true"
													/>
													<span>
														{profile.contactNumber && profile.contactNumber}
													</span>
												</Link>
											</div>

											{/* <div className="font-light text-gray-600 flex flex-row space-x-1">
												<svg
													className="w-6 h-6"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
														clipRule="evenodd"
													/>
												</svg>
												<span>
													
												</span>
											</div> */}
										</div>
									</div>
									<div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
										{/* {isAppliedJob ? (
										<button
											type="button"
											className="inline-flex items-center px-4 py-2 border border-4px-solid-black text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
											disabled
										>
											Applied
										</button>
									) : (
										<button
											type="button"
											className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
											onClick={(e) => applyJob()}
										>
											Apply
										</button>
									)} */}
										<button
											type="button"
											className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
											onClick={() => modalClick()}
											ref={cancelButtonRef}
										>
											Cancel
										</button>
										<button
											type="button"
											className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
											onClick={(e) => viewCompleteProfile(e)}
										>
											View Complete Profile
										</button>
									</div>
								</div>
							</Transition.Child>
						</div>
					</Dialog>
				</Transition.Root>
			)}
		</div>
	);
}
export default ViewProfileModal;
