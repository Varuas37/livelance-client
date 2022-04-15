import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MainApi from "../../../repository/MainApi";
import ViewProfileModal from "../profile/ViewProfileModal";

const CandidateCard = ({ data }) => {
	let { jobId, status } = useParams();

	const [isOfferBtnClicked, setIsOfferBtnClicked] = useState(false);
	const [isDenyBtnClicked, setIsDenyBtnClicked] = useState(false);
	const [isProfileAvatarClicked, setIsProfileAvatarClicked] = useState(false);

	const openProfileModal = (e) => {
		e.preventDefault();
		setIsProfileAvatarClicked(true);
	};

	useEffect(() => {}, []);

	const handleJobDecision = async (e, decision) => {
		e.preventDefault();
		try {
			const token = localStorage.LLtoken;
			const AuthStr = "Bearer ".concat(token);

			const response = await MainApi.post(
				`/jobs/jobdecision/${jobId}`,
				{
					status: decision,
					profileId: data._id,
				},
				{
					headers: { Authorization: AuthStr },
				}
			);

			if (response.status === 200 || response.status === 201) {
				if (decision === "Offered") {
					setIsOfferBtnClicked(true);
				} else if (decision === "Denied") {
					setIsDenyBtnClicked(true);
				}
			}
		} catch (err) {
			console.log(err.message);
		}
	};
	return (
		<>
			{isProfileAvatarClicked && (
				<ViewProfileModal
					id={data._id}
					isProfileAvatarClicked={isProfileAvatarClicked}
					setIsProfileAvatarClicked={setIsProfileAvatarClicked}
				/>
			)}

			<li className="bg-white shadow overflow-hidden mt-5 px-4 py-4 sm:px-6 sm:rounded-md">
				<div className="w-full px-10 my-4 py-6 bg-white ">
					<div className="flex justify-between items-center">
						{/* <span className="font-light text-gray-600">{data.postedOn}</span> */}
					</div>
					<div className="mt-2">
						<a
							className="text-2xl text-gray-700 font-bold hover:text-gray-600"
							href="#"
						>
							{data.firstName && data.firstName}{" "}
							{data.lastName && data.lastName}
						</a>
						<p className="mt-2 text-gray-600">
							{data.about && data.about.length > 150
								? data.about.substring(0, 150) + " ....... "
								: data.about}
						</p>
					</div>

					<div className="py-5">
						<h3 className="font-bold text-xs">Skills</h3>
						{/* <!-- This is the tags / Skills container --> */}
						<div className="my-1 flex flex-wrap -m-1">
							{data.skills.map((skill, idx) => (
								<div key={idx}>
									<span className="m-1 bg-indigo-200 hover:bg-indigo-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
										{skill}
									</span>
								</div>
							))}
						</div>

						{data.category && (
							<>
								<h3 className="font-bold text-xs">Category</h3>

								<div className="my-1 flex flex-wrap -m-1">
									<div>
										<span className="m-1 bg-indigo-200 hover:bg-indigo-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
											{data.category}
										</span>
									</div>
								</div>
							</>
						)}
						{data.subCategory && (
							<>
								<h3 className="font-bold text-xs">Sub-Category</h3>
								{/* <!-- This is the tags / Skills container --> */}
								<div className="my-1 flex flex-wrap -m-1">
									<div>
										<span className="m-1 bg-indigo-200 hover:bg-indigo-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
											{data.subCategory}
										</span>
									</div>
								</div>
							</>
						)}

						<div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
							<Link
								to={`#`}
								// to={`/coolchat/${profile.fields.Email}`}
								className="inline-flex justify-center px-4 py-2  shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
							>
								<PhoneIcon
									className="-ml-1 mr-2 h-5 w-5 text-gray-400"
									aria-hidden="true"
								/>
								<span>{data.contactNumber && data.contactNumber}</span>
							</Link>
						</div>
					</div>

					<div className="flex justify-between items-center mt-4">
						<div>
							<div className="flex items-center">
								<img
									className="cursor-pointer mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
									src={
										data.avatar !== "#"
											? data.avatar
											: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
									}
									alt="avatar"
									onClick={(e) => openProfileModal(e)}
								/>
								{/* show accept button only for saved, offered, and posted jobs */}
								{status === "Applied" && (
									<>
										{isOfferBtnClicked ? (
											<button
												type="button"
												className="inline-flex items-center px-4 py-2 border border-4px-solid-black text-sm font-medium rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
												disabled
											>
												Accepted
											</button>
										) : isDenyBtnClicked ? (
											<></>
										) : (
											<button
												type="button"
												className="m-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
												onClick={(e) => handleJobDecision(e, "Offered")}
											>
												Accept
											</button>
										)}
										{isDenyBtnClicked ? (
											<button
												type="button"
												className="inline-flex items-center px-4 py-2 border border-4px-solid-black text-sm font-medium rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
												disabled
											>
												Denied
											</button>
										) : isOfferBtnClicked ? (
											<></>
										) : (
											<button
												type="button"
												className="m-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
												// onClick={(e) => handleApplyClick(e, data.jobId._id)}
												onClick={(e) => handleJobDecision(e, "Denied")}
											>
												Deny
											</button>
										)}
									</>
								)}

								{/* show reject button only for applied, ongoing, and offered jobs */}
							</div>
						</div>
					</div>
				</div>
			</li>
		</>
	);
};

export default CandidateCard;
