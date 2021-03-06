import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainApi from "../../../repository/MainApi";
import { Dialog, Transition } from "@headlessui/react";
import CandidateCard from "../../components/candidates/CandidateCard";
import { useDispatch, useSelector } from "react-redux";
import { setCandidateList } from "../../../application/redux/action/employerActions";
const ViewCandidates = () => {
	let { jobId, status } = useParams();

	const [sidebarOpen, setSidebarOpen] = useState(false);
	const candidateList = useSelector(
		(state) => state.freelanceReducer.candidateList
	);

	let dispatch = useDispatch();
	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setCandidateList(jobId, status));
	}, []);

	return (
		<div>
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

					<div className="md:pl-64">
						<div className="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
							<main className="flex-1">
								<div className="py-6">
									<div className="px-4 sm:px-6 md:px-0">
										{/* Start putting items*/}
										<ul role="list" className="space-y-3 mt-10">
											{/* For the list of Jobs Map the JobCard Here */}
											<div className="bg-white  overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
												{candidateList &&
													candidateList.map((eachCandidate) => {
														return (
															<CandidateCard
																key={eachCandidate.profileId._id}
																data={eachCandidate.profileId}
															/>
														);
													})}
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
		</div>
	);
};

export default ViewCandidates;
