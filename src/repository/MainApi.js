import axios from "axios";

const baseURL =
	process.env.NODE_ENV === "production"
		? "https://uttcoeengineeringserver.com"
		: "http://localhost:5500";

export default axios.create({
	baseURL,
});
