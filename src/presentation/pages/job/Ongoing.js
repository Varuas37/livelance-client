import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOngoingFreelanceList } from "../../../application/redux/action/freelanceActions";
import GenericBrowseJob from "../../components/jobs/GenericBrowseJob";
import SearchAndProfileAvatar from "../../components/appheader/SearchAndProfileAvatar";

const Ongoing = () => {
	const ongoingFreelanceList = useSelector(
		(state) => state.freelanceReducer.ongoingFreelanceList
	);

	const dispatch = useDispatch();
	useEffect(() => {
		// dispatch(setOngoingFreelanceList());
	}, []);

	return (
		<>
			<SearchAndProfileAvatar />
			{ongoingFreelanceList.length > 0 && (
				<GenericBrowseJob
					props={{ dataList: ongoingFreelanceList, myJobType: "ongoing" }}
				/>
			)}
		</>
	);
};

export default Ongoing;
