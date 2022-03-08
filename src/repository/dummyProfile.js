const profile = {
	name: "Emily Selman",
	imageUrl:
		"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
	coverImageUrl:
		"https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
	about: `I am a experienced web developer with 4 years of experience in React, Node and MongDb`,
	fields: {
		Email: "ricardocooper@example.com",
		Title: "Senior Front-End Developer",
		Location: "Tyler, TX",
		ZipCode: "75701",
		PayRange: "$34/hr",
		Skills: "Java, Python, Web Development",
	},
};

export function fetchDummyProfile() {
	return { data: profile };
}
