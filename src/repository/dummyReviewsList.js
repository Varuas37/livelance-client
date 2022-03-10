const dummyReviewsData = {
	data: {
		id: "1",
		average: 4,
		totalCount: 1624,
		counts: [
			{ rating: 5, count: 1019 },
			{ rating: 4, count: 162 },
			{ rating: 3, count: 97 },
			{ rating: 2, count: 199 },
			{ rating: 1, count: 147 },
		],
	},
};
const dummyReviewsList = {
	data: [
		{
			id: "1",
			postedOn: "Jan 22, 2022",
			author: "John Doe",
			title: "review title 1",
			content:
				"review Description. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim",
			avatarSrc:
				"https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
			rating: "3.5",
		},

		{
			id: "2",
			postedOn: "Jan 22, 2022",
			author: "John Doe",
			title: "review title 2",
			content:
				"review Description. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim",
			avatarSrc:
				"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
			rating: "4.5",
		},
		{
			id: "3",
			postedOn: "Jan 22, 2022",
			author: "John Doe",
			title: "review title 3",
			content:
				"review Description. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim",
			avatarSrc:
				"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
			rating: "5",
		},
	],
};

export function fetchDummyReviewsData() {
	return dummyReviewsData;
}
export function fetchDummyReviewsList() {
	return dummyReviewsList;
}
export function fetchDummyReviewById(id) {
	return {
		data: dummyReviewsList.data.find(
			(eachDummyReview) => eachDummyReview.id === id
		),
	};
}
