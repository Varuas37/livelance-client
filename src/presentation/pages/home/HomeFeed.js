import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import JobCard from "../../components/core/JobCard";
import { useDispatch } from "react-redux";
import {
	setFreelanceIdListByStatus,
	setFreelanceList,
} from "../../../application/redux/action/freelanceActions";
import { useSelector } from "react-redux";
import SortOptions from "../../components/sort/SortOptions";
import SearchAndProfileAvatar from "../../components/appheader/SearchAndProfileAvatar";
import { checkUser } from "../../../application/redux/action/authActions";
import FreelancerHomeFeed from "../../components/homePage/FreelancerHomeFeed";
import EmployerHomeFeed from "../../components/homePage/EmployerHomeFeed";

function HomeFeed() {
	const user = useSelector((state) => state.authReducer.user);
	const dispatch = useDispatch();
	useEffect(() => {
		const fetch = async () => {
			if (localStorage.LLtoken) {
				dispatch(checkUser());
			}
		};
		fetch();
	}, []);

	return (
		<>
			{user && user.accountType && user.accountType === "freelancer" ? (
				<FreelancerHomeFeed />
			) : user && user.accountType && user.accountType === "employer" ? (
				<EmployerHomeFeed />
			) : (
				<></>
			)}
		</>
	);
}
export default HomeFeed;
