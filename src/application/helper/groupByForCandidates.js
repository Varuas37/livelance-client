export const groupByForCandidates = (arr, criteria) => {
	const newObj = arr.reduce(function (acc, currentValue) {
		if (!acc[currentValue[criteria]]) {
			acc[currentValue[criteria]] = [];
		}
		currentValue.jobId && acc[currentValue[criteria]].push(currentValue._id);
		return acc;
	}, {});
	return newObj;
};
