import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFreelanceListByStatus } from "../../../application/redux/action/freelanceActions";
import GenericBrowseJob from "../../components/jobs/GenericBrowseJob";
import SearchAndProfileAvatar from "../../components/appheader/SearchAndProfileAvatar";
import JobsNavigation from "../../components/jobs/JobsNavigation";

const Denied = () => {
	const [curFreelanceList, setCurFreelanceList] = useState([]);

	const deniedFreelanceList = useSelector(
		(state) => state.freelanceReducer.deniedFreelanceList
	);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setFreelanceListByStatus("Denied"));
	}, []);
	useEffect(() => {
		if (deniedFreelanceList) {
			setCurFreelanceList(deniedFreelanceList);
		}
	}, [deniedFreelanceList]);
	return (
		<>
			{deniedFreelanceList ? (
				<SearchAndProfileAvatar
					universalDataList={deniedFreelanceList}
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
					props={{ dataList: curFreelanceList, myJobType: "denied" }}
				/>
			)}
		</>
	);
};

export default Denied;
