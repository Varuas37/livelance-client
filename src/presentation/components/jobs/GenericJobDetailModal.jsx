/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFreelanceById } from "../../../application/redux/action/freelanceActions";

function GenericJobDetailModal({ jobId, setIsReadMoreClicked }) {
	const [open, setOpen] = useState(true);
	let navigate = useNavigate();
	const cancelButtonRef = useRef(null);

	const modalClick = () => {
		setOpen(!open);
		// navigate(`/myjobs/${myjobtype}`);
		setIsReadMoreClicked((isReadMoreClicked) => !isReadMoreClicked);
	};

	const selectedFreelance = useSelector(
		(state) => state.freelanceReducer.selectedFreelance
	);
	const dispatch = useDispatch();
	console.log(selectedFreelance);
	console.log(jobId);
	useEffect(() => {
		// dispatch(fetchFreelanceList());
		dispatch(setFreelanceById(jobId));

		// console.log("shivam")
	}, []);

	return (
		<div>
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
										<Dialog.Title
											as="h3"
											className="text-lg text-center leading-6 font-medium text-gray-900"
										>
											{selectedFreelance.jobTitle && selectedFreelance.jobTitle}
										</Dialog.Title>

										<div className="mt-2">
											<p className="mt-2 text-gray-600">
												{selectedFreelance.jobDescription &&
													selectedFreelance.jobDescription}
											</p>
										</div>
										<div className="py-5">
											<h3 className="font-bold text-xs">Skills</h3>
											{/* <!-- This is the tags / Skills container --> */}
											<div className="my-1 flex flex-wrap -m-1">
												{selectedFreelance.skills &&
													selectedFreelance.skills.map((skill, idx) => (
														<div key={idx}>
															<span className="m-1 bg-indigo-200 hover:bg-indigo-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
																{skill}
															</span>
														</div>
													))}
											</div>
										</div>

										<div className="flex flex-row  space-x-5 ">
											<div className="font-light text-gray-600 flex flex-row space-x-1">
												<svg
													className="w-6 h-6"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
														clipRule="evenodd"
													/>
												</svg>
												<span>
													{selectedFreelance.postedBy &&
														selectedFreelance.postedBy.firstName}{" "}
													{selectedFreelance.postedBy &&
														selectedFreelance.postedBy.lastName}
													
												</span>
											</div>
											<div className="font-light text-gray-600 flex flex-row space-x-1">
												<svg
													className="w-6 h-6"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
														clipRule="evenodd"
													/>
												</svg>
												<span>
													{selectedFreelance.duration &&
														selectedFreelance.duration}
												</span>
											</div>
											<div className="font-light text-gray-600 flex flex-row space-x-1">
												<svg
													className="w-6 h-6"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
														clipRule="evenodd"
													/>
												</svg>
												<span>
													{selectedFreelance.rate && selectedFreelance.rate}
												</span>
											</div>
										</div>

										<div className="font-light text-gray-600 flex flex-row space-x-1">
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
												{selectedFreelance.location &&
													selectedFreelance.location}
												,
												{selectedFreelance.zipcode && selectedFreelance.zipcode}
											</span>
										</div>
										<div className="mt-9">
											<div className="mt-1 ">
												<textarea
													rows={3}
													id="additionalJobInfo"
													name="additionalJobInfo"
													placeholder="Description"
													type="text"
													autoComplete="family-name"
													required
													className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none resize-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												/>
											</div>
										</div>
										<div className="mt-2">
											<p className="text-sm text-start text-gray-500">
												Please write any additional information you want the
												employer to know.
											</p>
										</div>
									</div>
								</div>
								<div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
									<button
										type="button"
										className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
										onClick={() => modalClick()}
									>
										Apply
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
export default GenericJobDetailModal;
