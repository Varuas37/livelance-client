export const groupBy = (arr, criteria) => {
	const newObj = arr.reduce(function (acc, currentValue) {
		if (!acc[currentValue[criteria]]) {
			acc[currentValue[criteria]] = [];
		}
		currentValue.jobId &&
			acc[currentValue[criteria]].push(currentValue.jobId._id);
		return acc;
	}, {});
	return newObj;
};
