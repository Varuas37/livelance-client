import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setFreelanceListByStatus,
	setOfferedFreelanceList,
} from "../../../application/redux/action/freelanceActions";
import GenericBrowseJob from "../../components/jobs/GenericBrowseJob";
import SearchAndProfileAvatar from "../../components/appheader/SearchAndProfileAvatar";
import JobsNavigation from "../../components/jobs/JobsNavigation";

const Accepted = () => {
	const [curFreelanceList, setCurFreelanceList] = useState([]);

	const acceptedFreelanceList = useSelector(
		(state) => state.freelanceReducer.acceptedFreelanceList
	);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setFreelanceListByStatus("Accepted"));
	}, []);

	useEffect(() => {
		if (acceptedFreelanceList) {
			setCurFreelanceList(acceptedFreelanceList);
		}
	}, [acceptedFreelanceList]);

	return (
		<>
			{acceptedFreelanceList ? (
				<SearchAndProfileAvatar
					universalDataList={acceptedFreelanceList}
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
					props={{ dataList: curFreelanceList, myJobType: "accepted" }}
				/>
			)}
		</>
	);
};

export default Accepted;
