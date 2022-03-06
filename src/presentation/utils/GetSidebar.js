import React from "react";
import { useLocation } from "react-router-dom";
import StaticSidebar from "../components/StaticSidebar";

const GetSidebar = () => {
	const location = useLocation();

	return <>{location.pathname !== "/" && <StaticSidebar />}</>;
};

export default GetSidebar;
