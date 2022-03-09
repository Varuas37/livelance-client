import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSavedFreelanceList } from "../../../application/redux/action/freelanceActions";
import GenericBrowseJob from "../../components/jobs/GenericBrowseJob";

const SavedJobs = () => {
	const savedFreelanceList = useSelector(
		(state) => state.freelanceReducer.savedFreelanceList
	);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setSavedFreelanceList());
	}, []);

	return (
		<>
			{savedFreelanceList.length > 0 && (
				<GenericBrowseJob
					props={{ dataList: savedFreelanceList, myJobType: "saved" }}
				/>
			)}
		</>
	);
};

export default SavedJobs;
