import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import {
	setFreelanceListByStatus,
	setOfferedFreelanceList,
} from "../../../application/redux/action/freelanceActions";
=======
import { setFreelanceListByStatus } from "../../../application/redux/action/freelanceActions";
>>>>>>> 136ff2e52a86e0c019e985bdfbc1942c0ba135fd
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
<<<<<<< HEAD
			<SearchAndProfileAvatar />
			{deniedFreelanceList.length > 0 && (
=======
			{deniedFreelanceList && (
>>>>>>> 136ff2e52a86e0c019e985bdfbc1942c0ba135fd
				<GenericBrowseJob
					props={{ dataList: deniedFreelanceList, myJobType: "denied" }}
				/>
			)}
		</>
	);
};

export default Denied;
