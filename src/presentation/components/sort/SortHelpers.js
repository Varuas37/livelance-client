const durationOrdering = {
	hour: 1,
	hr: 1,
	week: 2,
	project: 3,
	month: 4,
};
export const sortPayLowToHigh = () => (list, setSortedList) => {
	setSortedList(
		list.sort(function (a, b) {
			// return a.rate - b.rate
			if (a.rateDuration === b.rateDuration) {
				return a.rate - b.rate;
			} else {
				return (
					durationOrdering[a.rateDuration] - durationOrdering[b.rateDuration]
				);
			}
		})
	);
};
export const sortPayHighToLow = () => (list, setSortedList) => {
	setSortedList(
		list.sort(function (a, b) {
			// return a.rate - b.rate
			if (a.rateDuration === b.rateDuration) {
				return b.rate - a.rate;
			} else {
				return (
					durationOrdering[b.rateDuration] - durationOrdering[a.rateDuration]
				);
			}
		})
	);

	// setSortedList((prevList) =>
	// 	prevList.sort((a, b) => (a.rate > b.rate ? 1 : -1))
	// );
};
export const sortDurationAsending = () => (list, setSortedList) => {
	setSortedList(
		list.sort(function (a, b) {
			return (
				durationOrdering[a.duration.split(" ")[1]] -
					durationOrdering[b.duration.split(" ")[1]] ||
				a.duration.split(" ")[0] > b.duration.split(" ")[0]
			);
		})
	);
};

export const sortDurationDescending = () => (list, setSortedList) => {
	setSortedList(
		list.sort(function (a, b) {
			return (
				durationOrdering[b.duration.split(" ")[1]] -
					durationOrdering[a.duration.split(" ")[1]] ||
				a.duration.split(" ")[0] < b.duration.split(" ")[0]
			);
		})
	);
};
