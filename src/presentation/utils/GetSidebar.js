import React from "react";
import { useLocation } from "react-router-dom";
import StaticSidebar from "../components/StaticSidebar";

const GetSidebar = () => {
	const location = useLocation();

	let excludeSidebarScreenList = [
		"/",
		"/signup",
		"/signin",
		"/profile",
		"/profile/edit",
		"/onboarding",
		// "/categories",
	];
	return (
		<>
			{!excludeSidebarScreenList.includes(location.pathname) && (
				<StaticSidebar />
			)}
		</>
	);
};

export default GetSidebar;
