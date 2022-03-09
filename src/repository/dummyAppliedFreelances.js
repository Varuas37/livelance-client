const dummyAppliedFreelanceList = {
	data: [
		{
			id: "1",
			postedOn: "Jan 22, 2022",
			jobTitle: "Applied Job 1",
			jobDescription:
				"Job Description. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
			skills: [
				"programming",
				"web design",
				"nodejs",
				"sql",
				"mobile development",
			],
			postedBy: "Jeff",
			duration: "3 weeks",
			rate: "$35 / hr",
			location: "3700 McDonald Rd",
			zipcode: "75701",
		},
		{
			id: "2",
			postedOn: "Jan 22, 2022",
			jobTitle: "Applied Job 2",
			jobDescription:
				"Job Description. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
			skills: [
				"programming",
				"web design",
				"nodejs",
				"sql",
				"mobile development",
			],
			postedBy: "Shivam Chaudhary",
			duration: "3 weeks",
			rate: "$35 / hr",
			location: "3900 Old Omen RD",
			zipcode: "75701",
		},
		{
			id: "3",
			postedOn: "Jan 22, 2022",
			jobTitle: "Applied Job 3",
			jobDescription:
				"Job Description. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
			skills: [
				"programming",
				"web design",
				"nodejs",
				"sql",
				"mobile development",
			],
			postedBy: "John Doe",
			duration: "3 weeks",
			rate: "$35 / hr",
			location: "3900 Old Omen RD",
			zipcode: "75701",
		},
	],
};

export function fetchdummyAppliedFreelanceList() {
	return dummyAppliedFreelanceList;
}
export function fetchDummyFreelanceById(id) {
	return {
		data: dummyAppliedFreelanceList.data.find(
			(eachDummyFreelance) => eachDummyFreelance.id === id
		),
	};
}
