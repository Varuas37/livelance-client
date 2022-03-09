import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setOfferedFreelanceList,
	setSavedFreelanceList,
} from "../../../application/redux/action/freelanceActions";
import GenericBrowseJob from "../../components/jobs/GenericBrowseJob";

const Offers = () => {
	const offeredFreelanceList = useSelector(
		(state) => state.freelanceReducer.offeredFreelanceList
	);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setOfferedFreelanceList());
	}, []);

	return (
		<>
			{offeredFreelanceList.length > 0 && (
				<GenericBrowseJob
					props={{ dataList: offeredFreelanceList, myJobType: "offers" }}
				/>
			)}
		</>
	);
};

export default Offers;
