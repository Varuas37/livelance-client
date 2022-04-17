import React from "react";
import PostJob from "../../components/jobs/PostJob";
import BrowsePostedJobs from "./BrowsePostedJobs";
import SearchAndProfileAvatar from "../../components/appheader/SearchAndProfileAvatar";
import ViewProfile from "../profile/ViewProfile";

const PostedJobs = () => {

	return (
		<>
			{/* <SearchAndProfileAvatar /> */}
			
			<BrowsePostedJobs />
		</>
	);
};

export default PostedJobs;
