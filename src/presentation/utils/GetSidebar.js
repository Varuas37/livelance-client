import React from "react";
import { useLocation } from "react-router-dom";
import StaticSidebar from "../components/StaticSidebar";

const GetSidebar = () => {
	const location = useLocation();

	let excludeSidebarScreenList = [
		"/",
		"/profile",
		"/profile/edit",
		"/onboarding",
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
