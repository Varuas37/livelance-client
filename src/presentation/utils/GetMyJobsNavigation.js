import React from "react";
import { useLocation } from "react-router-dom";
import JobsNavigation from "../components/jobsNavigation/JobsNavigation";
const GetMyJobsNavigation = () => {
	const location = useLocation();
	return <>{location.pathname.includes("/myjobs") && <JobsNavigation />}</>;
};

export default GetMyJobsNavigation;
