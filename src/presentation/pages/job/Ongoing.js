import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOngoingFreelanceList } from "../../../application/redux/action/freelanceActions";
import GenericBrowseJob from "../../components/jobs/GenericBrowseJob";

const Ongoing = () => {
	const ongoingFreelanceList = useSelector(
		(state) => state.freelanceReducer.ongoingFreelanceList
	);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setOngoingFreelanceList());
	}, []);

	return (
		<>
			{ongoingFreelanceList.length > 0 && (
				<GenericBrowseJob
					props={{ dataList: ongoingFreelanceList, myJobType: "ongoing" }}
				/>
			)}
		</>
	);
};

export default Ongoing;
