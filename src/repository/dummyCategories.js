const dummyCategoryList = {
	data: [
		{
			id: 1,
			name: "House Moving",
			link: "/categories/house-moving",
			imageSrc:
				"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cardboard-boxes-and-cleaning-things-for-moving-into-a-new-home-1573953252.jpg?crop=1.00xw:0.758xh;0,0.173xh&resize=1200:*",
			imageAlt: "House.",
		},
		{
			id: 2,
			name: "Electricity",
			link: "/categories/electricity",

			imageSrc:
				"https://www.uei.edu/wp-content/uploads/sites/5/2020/05/Top-5-Benefits-of-Being-an-Electrician-UEI-College.jpg",
			imageAlt: "Picture of electrician",
		},
		{
			id: 3,
			name: "Caretaker",
			link: "/categories/caretaking",
			imageSrc:
				"https://ak.picdn.net/offset/photos/5ed7c0afa75ca0db370949a4/medium/offset_949866.jpg",
			imageAlt: "Caretaker talking care",
		},
		{
			id: 4,
			name: "Tutoring",
			link: "/categories/tutoring",
			imageSrc:
				"https://images.theconversation.com/files/268455/original/file-20190409-2931-rzhl22.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
			imageAlt:
				"Hand holding black machined steel mechanical pencil with brass tip and top.",
		},
	],
};

export function fetchDummyCategoryList() {
	return dummyCategoryList;
}
export function fetchDummyFreelanceById(id) {
	return {
		data: dummyCategoryList.data.find(
			(eachDummyFreelance) => eachDummyFreelance.id === id
		),
	};
}
