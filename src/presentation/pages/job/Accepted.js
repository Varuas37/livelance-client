import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setFreelanceListByStatus,
	setOfferedFreelanceList,
} from "../../../application/redux/action/freelanceActions";
import GenericBrowseJob from "../../components/jobs/GenericBrowseJob";
import SearchAndProfileAvatar from "../../components/appheader/SearchAndProfileAvatar";

const Accepted = () => {
	const acceptedFreelanceList = useSelector(
		(state) => state.freelanceReducer.acceptedFreelanceList
	);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setFreelanceListByStatus("Accepted"));
	}, []);

	return (
		<>
			<SearchAndProfileAvatar />
			{acceptedFreelanceList.length > 0 && (
				<GenericBrowseJob
					props={{ dataList: acceptedFreelanceList, myJobType: "accepted" }}
				/>
			)}
		</>
	);
};

export default Accepted;
