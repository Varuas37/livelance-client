import React from "react";
import { useLocation } from "react-router-dom";
import StaticSidebar from "../components/StaticSidebar";
import { useSelector } from "react-redux";

const GetSidebar = () => {
	const isUserAuthenticated = useSelector(
		(state) => state.authReducer.isUserAuthenticated
	);

	const location = useLocation();

	console.log(location.pathname);
	let excludeSidebarScreenList = [
		"/signup",
		"/signin",
		"/profile",
		"/profile/edit",
		"/onboarding",
		"/viewprofile",
		// "/categories",
	];
	return (
		<>
			{location.pathname !== "/" &&
				!excludeSidebarScreenList.find((each) =>
					location.pathname.includes(each)
				) &&
				isUserAuthenticated && <StaticSidebar />}
		</>
	);
};

export default GetSidebar;
