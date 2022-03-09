import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppliedFreelanceList } from "../../../application/redux/action/freelanceActions";
import GenericBrowseJob from "../../components/jobs/GenericBrowseJob";

const Applied = () => {
	const appliedFreelanceList = useSelector(
		(state) => state.freelanceReducer.appliedFreelanceList
	);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setAppliedFreelanceList());
	}, []);

	return (
		<>
			{appliedFreelanceList.length > 0 && (
				<GenericBrowseJob
					props={{ dataList: appliedFreelanceList, myJobType: "applied" }}
				/>
			)}
		</>
	);
};

export default Applied;
