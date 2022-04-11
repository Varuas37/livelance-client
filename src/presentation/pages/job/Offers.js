import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOfferedFreelanceList } from "../../../application/redux/action/freelanceActions";
import GenericBrowseJob from "../../components/jobs/GenericBrowseJob";
import SearchAndProfileAvatar from "../../components/appheader/SearchAndProfileAvatar";
import BrowseOfferedJobs from "../../components/jobs/freelancer/BrowseOfferedJobs";

const Offers = () => {
	const offeredFreelanceList = useSelector(
		(state) => state.freelanceReducer.offeredFreelanceList
	);

	console.log(offeredFreelanceList);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setOfferedFreelanceList());
	}, []);

	return (
		<>
			<SearchAndProfileAvatar />
			{offeredFreelanceList.length > 0 && (
				<BrowseOfferedJobs props={{ dataList: offeredFreelanceList }} />
			)}
		</>
	);
};

export default Offers;
