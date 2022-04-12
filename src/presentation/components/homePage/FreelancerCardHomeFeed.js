import React, { useState } from "react";
import { MailIcon, PhoneIcon, PencilIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import ViewProfileModal from "../profile/ViewProfileModal";

const FreelancerCardHomeFeed = ({ data }) => {
	
	const [isProfileAvatarClicked, setIsProfileAvatarClicked] = useState(false);
	const openProfileModal = (e) => {
		e.preventDefault();
		setIsProfileAvatarClicked(true);
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

						{data.categories && (
							<>
								<h3 className="font-bold text-xs">Category</h3>

								<div className="my-1 flex flex-wrap -m-1">
									{data.categories.map((category, idx) => (
										<div key={idx}>
											<span className="m-1 bg-indigo-200 hover:bg-indigo-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
												{category}
											</span>
										</div>
									))}
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
								<span>{data.contactNumber && data.contactNumber}</span>
							</Link>
						</div>
					</div>

					<div className="flex justify-between items-center mt-4">
						<div>
							<a className="flex items-center" href="#">
								<img
									className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
									src={data.avatar && data.avatar}
									alt="avatar"
									onClick={(e) => openProfileModal(e)}
								/>
							</a>
						</div>
					</div>
				</div>
			</li>
		</>
	);
};

export default FreelancerCardHomeFeed;
