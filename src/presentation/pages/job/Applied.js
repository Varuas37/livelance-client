import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { setAppliedFreelanceList, setFreelanceListByStatus } from "../../../application/redux/action/freelanceActions";
=======
import {
	setAppliedFreelanceList,
	setFreelanceListByStatus,
} from "../../../application/redux/action/freelanceActions";
>>>>>>> 136ff2e52a86e0c019e985bdfbc1942c0ba135fd
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
