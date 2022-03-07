const dummyFreelanceList = {
	data: [
		{
			id: "3",
			postedOn: "Jan 22, 2022",
			jobTitle: "frontend engineer",
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
		{
			id: "1",
			postedOn: "Jan 22, 2022",
			jobTitle: "Job Title",
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
			jobTitle: "SWE",
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
	],
};

export function fetchDummyFreelanceList() {
	return dummyFreelanceList;
}
export function fetchDummyFreelanceById(id) {
	return {
		data: dummyFreelanceList.data.find(
			(eachDummyFreelance) => eachDummyFreelance.id === id
		),
	};
}
