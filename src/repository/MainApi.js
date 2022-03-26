import axios from "axios";

const baseURL =
	process.env.NODE_ENV === "production" ? "" : "http://localhost:5500";
    
export default axios.create({
	baseURL,
});
