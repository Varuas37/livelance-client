import { MailIcon, PhoneIcon, PencilIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
	getProfile,
	setProfile,
	setReviews,
	setReviewsData,
} from "../../../application/redux/action/profileActions";
import ProfileBodyPart from "../../components/profile/ProfileBodyPart";

import ProfileScreenReviews from "../../components/profile/ProfileScreenReviews";
import OwnReviews from "../../components/reviews/OwnReviews";
import EditProfileModal from "./EditProfileModal";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
function UserProfile() {
	const [tabs, setTabs] = useState({
		Profile: { name: "Profile", href: "/myjobs", current: true },
		Reviews: { name: "Reviews", href: "/myjobs/saved", current: false },
	});

	const [isEditProfileCardClicked, setIsEditProfileCardClicked] =
		useState(false);

	const profile = useSelector((state) => state.profileReducer.profile);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProfile());
	}, []);

	const openEditProfileModal = (e) => {
		e.preventDefault();
		setIsEditProfileCardClicked(true);
	};
	const profileTabClick = (e, tabname) => {
		e.preventDefault();

		// console.log(tabname);
		Object.keys(tabs).forEach((key) => {
			if (key === tabname) {
				setTabs((prev) => {
					return {
						...prev,
						[key]: {
							...prev[key],
							current: true,
						},
					};
				});
			} else {
				setTabs((prev) => {
					return {
						...prev,
						[key]: {
							...prev[key],
							current: false,
						},
					};
				});
			}
		});
	};
	return (
		<>
			{isEditProfileCardClicked && (
				<EditProfileModal
					isEditProfileCardClicked={isEditProfileCardClicked}
					setIsEditProfileCardClicked={setIsEditProfileCardClicked}
				/>
			)}
			{profile && (
				<div className="h-full">

					<div className="flex-1 relative z-0 flex overflow-hidden">

						<main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
							<article>
								{/* Profile header */}
								<div>
									<div>
										<div className=" absolute flex-shrink-0 px-4 flex items-center">
											<Link to="/home">
												<img
													className="mt-5 h-8 w-auto"
													src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
													alt="Workflow"
												/>
											</Link>
										</div>
										<img
											className="h-32 w-full object-cover lg:h-48"
											src={
												profile.coverImage !== "#"
													? profile.coverImage
													: "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
											}
											alt=""
										/>
									</div>
									<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8z ">
										<div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
											<div className="flex">
												<img
													className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
													src={
														profile.avatar && profile.avatar !== "#"
															? profile.avatar
															: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
													}
													alt=""
												/>
											</div>
											<div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
												<div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
													<h1 className="text-2xl font-bold text-gray-900 truncate">
														{profile.firstName && profile.firstName}{" "}
														{profile.lastName && profile.lastName}
													</h1>
												</div>

												<div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
													{/* <Link
														to={`#`}
														// to={`/coolchat/${profile.fields.Email}`}
														className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
													>
														<MailIcon
															className="-ml-1 mr-2 h-5 w-5 text-gray-400"
															aria-hidden="true"
														/>
														<span>Messenger</span>
													</Link> */}

													{/* <button
														type="button"
														className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
													>
														<PhoneIcon
															className="-ml-1 mr-2 h-5 w-5 text-gray-400"
															aria-hidden="true"
														/>
														<span>Call</span>
													</button> */}
													<div
														onClick={openEditProfileModal}
														className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
													>
														<PencilIcon
															className="-ml-1 mr-2 h-5 w-5 text-gray-400"
															aria-hidden="true"
														/>
														<span>Edit Profile</span>
													</div>
												</div>
											</div>
										</div>
										<div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
											<h1 className="text-2xl font-bold text-gray-900 truncate">
												{profile.name}
											</h1>
										</div>
									</div>
								</div>

								{/* Tabs */}
								<div className="mt-6 sm:mt-2 2xl:mt-5">
									<div className="border-b border-gray-200">
										<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
											<nav className="-mb-px flex space-x-8" aria-label="Tabs">
												{Object.keys(tabs).map((tab) => (
													<div
														onClick={(e) => profileTabClick(e, tabs[tab].name)}
														key={tab}
														to={tabs[tab].href}
														className={classNames(
															tabs[tab].current
																? "border-pink-500 text-gray-900"
																: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
															"whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
														)}
														aria-current={
															tabs[tab].current ? "page" : undefined
														}
													>
														{tabs[tab].name}
													</div>
												))}
											</nav>
										</div>
									</div>
								</div>

								{/* Description list */}
								{tabs["Profile"].current && (
									<>
										<ProfileBodyPart profile={profile} />
										{/* {reviewsList && (
											<ProfileScreenReviews
												reviewsList={
													reviewsList.length > 2
														? reviewsList.slice(0, 2)
														: reviewsList
												}
												reviewsData={reviewsData}
											/>
										)} */}
									</>
								)}

								{/* Reviews */}
								{tabs["Reviews"].current && (
									<OwnReviews
										id={profile.userProfileId}
									// reviewsList={reviewsList}
									// reviewsData={reviewsData}
									/>
								)}
							</article>
						</main>
					</div>
				</div>
			)}
		</>
	);
}
export default UserProfile;
