import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setFreelanceListByStatus,
	setSavedFreelanceList,
} from "../../../application/redux/action/freelanceActions";
import GenericBrowseJob from "../../components/jobs/GenericBrowseJob";
import SearchAndProfileAvatar from "../../components/appheader/SearchAndProfileAvatar";
import JobsNavigation from "../../components/jobs/JobsNavigation";

const SavedJobs = () => {
	const [curFreelanceList, setCurFreelanceList] = useState([]);

	const savedFreelanceList = useSelector(
		(state) => state.freelanceReducer.savedFreelanceList
	);

	const dispatch = useDispatch();
	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setFreelanceListByStatus("Saved"));
	}, []);

	useEffect(() => {
		if (savedFreelanceList) {
			setCurFreelanceList(savedFreelanceList);
		}
	}, [savedFreelanceList]);

	// console.log(curFreelanceList);
	return (
		<>
			{savedFreelanceList ? (
				<SearchAndProfileAvatar
					universalDataList={savedFreelanceList}
					dataList={curFreelanceList}
					setDataList={setCurFreelanceList}
					accountType={"freelancer"}
				/>
			) : (
				<SearchAndProfileAvatar />
			)}

			<JobsNavigation />
			{curFreelanceList && (
				<GenericBrowseJob
					props={{ dataList: curFreelanceList, myJobType: "saved" }}
				/>
			)}
		</>
	);
};

export default SavedJobs;
