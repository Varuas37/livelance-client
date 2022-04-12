import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setAppliedFreelanceList,
	setFreelanceListByStatus,
} from "../../../application/redux/action/freelanceActions";
import GenericBrowseJob from "../../components/jobs/GenericBrowseJob";
import SearchAndProfileAvatar from "../../components/appheader/SearchAndProfileAvatar";

const Applied = () => {
	const appliedFreelanceList = useSelector(
		(state) => state.freelanceReducer.appliedFreelanceList
	);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setFreelanceListByStatus("Applied"));
	}, []);

	return (
		<>
			{appliedFreelanceList.length > 0 ? (
				<GenericBrowseJob
					props={{ dataList: appliedFreelanceList, myJobType: "applied" }}
				/>
			) : (
				<SearchAndProfileAvatar />
			)}
		</>
	);
};

export default Applied;
