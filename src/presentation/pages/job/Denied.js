import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setFreelanceListByStatus,
	setOfferedFreelanceList,
} from "../../../application/redux/action/freelanceActions";
import GenericBrowseJob from "../../components/jobs/GenericBrowseJob";
import SearchAndProfileAvatar from "../../components/appheader/SearchAndProfileAvatar";

const Denied = () => {
	const deniedFreelanceList = useSelector(
		(state) => state.freelanceReducer.deniedFreelanceList
	);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setFreelanceListByStatus("Denied"));
	}, []);

	return (
		<>
			<SearchAndProfileAvatar />
			{deniedFreelanceList.length > 0 && (
				<GenericBrowseJob
					props={{ dataList: deniedFreelanceList, myJobType: "denied" }}
				/>
			)}
		</>
	);
};

export default Denied;
