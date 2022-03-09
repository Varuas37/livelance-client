import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setPostedFreelanceList,
	setSavedFreelanceList,
} from "../../../application/redux/action/freelanceActions";
import GenericBrowseJob from "../../components/jobs/GenericBrowseJob";

const BrowsePostedJobs = () => {
	const postedFreelanceList = useSelector(
		(state) => state.freelanceReducer.postedFreelanceList
	);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setPostedFreelanceList());
	}, []);

	return (
		<>
			{postedFreelanceList.length > 0 && (
				<GenericBrowseJob
					props={{ dataList: postedFreelanceList, myJobType: "posted" }}
				/>
			)}
		</>
	);
};

export default BrowsePostedJobs;
