import React from "react";
import PostJob from "../../components/jobs/PostJob";
import BrowsePostedJobs from "./BrowsePostedJobs";
import SearchAndProfileAvatar from "../../components/appheader/SearchAndProfileAvatar";

const PostedJobs = () => {
	return (
		<>
			<SearchAndProfileAvatar />

			<PostJob />
			<BrowsePostedJobs />
		</>
	);
};

export default PostedJobs;
