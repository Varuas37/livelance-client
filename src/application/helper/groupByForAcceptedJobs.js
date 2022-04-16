export const groupByForAcceptedJobs = (arr) => {
	const newObj = arr.reduce(function (acc, currentValue) {
		currentValue.jobId &&
			currentValue.jobId.postedBy &&
			acc.push(currentValue.jobId.postedBy);
		return acc;
	}, []);
	return newObj;
};
