import React from "react";
import { useLocation } from "react-router-dom";
import StaticSidebar from "../components/StaticSidebar";
import { useSelector } from "react-redux";

const GetSidebar = () => {
	const isUserAuthenticated = useSelector(
		(state) => state.authReducer.isUserAuthenticated
	);

	const location = useLocation();

	let excludeSidebarScreenList = [
		"/",
		"/signup",
		"/signin",
		"/profile",
		"/profile/edit",
		"/onboarding",
		"/viewprofile"
		// "/categories",
	];
	return (
		<>
			{!excludeSidebarScreenList.includes(location.pathname) &&
				isUserAuthenticated && <StaticSidebar />}
		</>
	);
};

export default GetSidebar;
