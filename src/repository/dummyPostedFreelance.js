const dummyPostedFreelanceList = {
	data: [
		{
			id: "1",
			postedById: "123",
			postedBy: "John Doe",
			postedOn: "Jan 22, 2022",
			jobTitle: "Posted Job 1",
			jobDescription:
				"Job Description. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
			skills: [
				"programming",
				"web design",
				"nodejs",
				"sql",
				"mobile development",
			],
			duration: "3 weeks",
			startDate: "2022-02-18",
			startTime: "7 pm",
			rate: "$35 / hr",
			location: "3900 Old Omen RD",
			zipcode: "75701",
			isActive: "true",
		},
		{
			id: "2",
			postedById: "456",
			postedBy: "John Doe",
			postedOn: "Jan 22, 2022",
			jobTitle: "Posted Job 2",
			jobDescription:
				"Job Description. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
			skills: [
				"programming",
				"web design",
				"nodejs",
				"sql",
				"mobile development",
			],
			duration: "3 weeks",
			startDate: "2022-02-18",
			startTime: "7 pm",
			rate: "$35 / hr",
			location: "3900 Old Omen RD",
			zipcode: "75701",
			isActive: "true",
		},
		{
			id: "3",
			postedById: "789",
			postedBy: "John Doe",
			postedOn: "Jan 22, 2022",
			jobTitle: "Posted Job 3",
			jobDescription:
				"Job Description. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
			skills: [
				"programming",
				"web design",
				"nodejs",
				"sql",
				"mobile development",
			],
			duration: "3 weeks",
			startDate: "2022-02-18",
			startTime: "7 pm",
			rate: "$35 / hr",
			location: "3900 Old Omen RD",
			zipcode: "75701",
			isActive: "true",
		},
	],
};

export function fetchdummyPostedFreelanceList() {
	return dummyPostedFreelanceList;
}
export function fetchDummyFreelanceById(id) {
	return {
		data: dummyPostedFreelanceList.data.find(
			(eachDummyFreelance) => eachDummyFreelance.id === id
		),
	};
}
