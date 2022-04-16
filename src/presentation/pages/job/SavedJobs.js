import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setFreelanceListByStatus,
	setSavedFreelanceList,
} from "../../../application/redux/action/freelanceActions";
import GenericBrowseJob from "../../components/jobs/GenericBrowseJob";
import SearchAndProfileAvatar from "../../components/appheader/SearchAndProfileAvatar";

const SavedJobs = () => {
	const savedFreelanceList = useSelector(
		(state) => state.freelanceReducer.savedFreelanceList
	);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setFreelanceListByStatus("Saved"));
	}, []);

	return (
		<>
			{
				savedFreelanceList && (
					<GenericBrowseJob
						props={{ dataList: savedFreelanceList, myJobType: "saved" }}
					/>
				)
				// : (
				// 	<SearchAndProfileAvatar />
				// )
			}
		</>
	);
};

export default SavedJobs;
