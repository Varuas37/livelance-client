import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setAppliedFreelanceList,
	setFreelanceListByStatus,
} from "../../../application/redux/action/freelanceActions";
import GenericBrowseJob from "../../components/jobs/GenericBrowseJob";
import SearchAndProfileAvatar from "../../components/appheader/SearchAndProfileAvatar";
import JobsNavigation from "../../components/jobs/JobsNavigation";

const Applied = () => {
	const [curFreelanceList, setCurFreelanceList] = useState([]);

	const appliedFreelanceList = useSelector(
		(state) => state.freelanceReducer.appliedFreelanceList
	);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setFreelanceListByStatus("Applied"));
	}, []);

	useEffect(() => {
		if (appliedFreelanceList) {
			setCurFreelanceList(appliedFreelanceList);
		}
	}, [appliedFreelanceList]);

	return (
		<>
			{appliedFreelanceList ? (
				<SearchAndProfileAvatar
					universalDataList={appliedFreelanceList}
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
					props={{ dataList: curFreelanceList, myJobType: "applied" }}
				/>
			)}
		</>
	);
};

export default Applied;
