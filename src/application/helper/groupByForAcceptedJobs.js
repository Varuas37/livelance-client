export const groupByForAcceptedJobs = (arr) => {
	const newObj = arr.reduce(function (acc, currentValue) {
		currentValue.profileId && acc.push(currentValue.profileId);
		return acc;
	}, []);
	return newObj;
};
