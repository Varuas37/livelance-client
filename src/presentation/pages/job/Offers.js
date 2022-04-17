import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setFreelanceListByStatus,
	setOfferedFreelanceList,
} from "../../../application/redux/action/freelanceActions";
import GenericBrowseJob from "../../components/jobs/GenericBrowseJob";
import SearchAndProfileAvatar from "../../components/appheader/SearchAndProfileAvatar";
import BrowseOfferedJobs from "../../components/jobs/freelancer/BrowseOfferedJobs";
import JobsNavigation from "../../components/jobs/JobsNavigation";

const Offers = () => {
	const offeredFreelanceList = useSelector(
		(state) => state.freelanceReducer.offeredFreelanceList
	);
	const [curFreelanceList, setCurFreelanceList] = useState([]);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setFreelanceListByStatus("Offered"));
		// console.log()
	}, []);

	useEffect(() => {
		if (offeredFreelanceList) {
			setCurFreelanceList(offeredFreelanceList);
		}
	}, [offeredFreelanceList]);

	return (
		<>
			{offeredFreelanceList ? (
				<SearchAndProfileAvatar
					universalDataList={offeredFreelanceList}
					dataList={curFreelanceList}
					setDataList={setCurFreelanceList}
					accountType={"freelancer"}
				/>
			) : (
				<SearchAndProfileAvatar />
			)}

			<JobsNavigation />
			{curFreelanceList && (
				<BrowseOfferedJobs
					props={{ dataList: curFreelanceList, myJobType: "offers" }}
				/>
			)}
		</>
	);
};

export default Offers;
