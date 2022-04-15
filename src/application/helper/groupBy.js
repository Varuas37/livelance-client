export const groupBy = (arr, criteria) => {
	const newObj = arr.reduce(function (acc, currentValue) {
		if (!acc[currentValue[criteria]]) {
			acc[currentValue[criteria]] = [];
		}

		// console.log(
		// 	currentValue.jobId && currentValue.jobId._id && currentValue.jobId._id
		// );
		currentValue.jobId &&
			currentValue.jobId._id &&
			acc[currentValue[criteria]].push(currentValue.jobId._id);
		return acc;
	}, {});
	return newObj;
};
