import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SET_CANDIDATE_LIST } from "../../../../application/redux/action/types";
import MainApi from "../../../../repository/MainApi";

import JobDetailModal from "../../../pages/jobDetail/JobDetailModal";
import ViewProfileModal from "../../profile/ViewProfileModal";
function PostedJobCard({ data }) {
	const [isProfileAvatarClicked, setIsProfileAvatarClicked] = useState(false);
	const [isReadMoreClicked, setIsReadMoreClicked] = useState(false);
	const [isAppliedJob, setIsAppliedJob] = useState(false);
	const [appliedCandidatesNum, setAppliedCandidatesNum] = useState("0");
	const [offeredCandidatesNum, setOfferedCandidatesNum] = useState("0");
	const [deniedCandidatesNum, setDeniedCandidatesNum] = useState("0");

	let navigate = useNavigate();

	const handleReadMoreClick = (e) => {
		e.preventDefault();
		setIsReadMoreClicked((isReadMoreClicked) => !isReadMoreClicked);
	};

	let dispatch = useDispatch();
	const viewCandidates = (e, status) => {
		e.preventDefault();
		dispatch({
			type: SET_CANDIDATE_LIST,
			payload: [],
		});
		navigate(`/viewcandidates/${data._id}/${status}`);
	};

	const candidateStatusList = ["Applied", "Offered", "Denied"];
	useEffect(() => {
		const fetch = async () => {
			candidateStatusList.forEach(async (status) => {
				try {
					const token = localStorage.LLtoken;
					const AuthStr = "Bearer ".concat(token);

					const response = await MainApi.post(
						`/jobs/${data._id}/candidates`,
						{
							status,
						},
						{
							headers: { Authorization: AuthStr },
						}
					);

					if (status === "Applied") {
						setAppliedCandidatesNum(response.data.candidates.length);
					} else if (status === "Offered") {
						setOfferedCandidatesNum(response.data.candidates.length);
					} else if (status === "Denied") {
						setDeniedCandidatesNum(response.data.candidates.length);
					}
				} catch (err) {
					console.log(err.message);
				}
			});
		};
		fetch();
	}, []);

	return (
		<>
			{isReadMoreClicked && (
				<JobDetailModal
					selectedFreelance={data}
					setIsReadMoreClicked={setIsReadMoreClicked}
					isAppliedJob={isAppliedJob}
					setIsAppliedJob={setIsAppliedJob}
				/>
			)}
			{isProfileAvatarClicked && (
				<ViewProfileModal
					id={data.postedBy._id}
					isProfileAvatarClicked={isProfileAvatarClicked}
					setIsProfileAvatarClicked={setIsProfileAvatarClicked}
				/>
			)}

			<li className="bg-white shadow overflow-hidden mt-5 px-4 py-4 sm:px-6 sm:rounded-md">
				<div className="w-full px-10 my-4 py-6 bg-white ">
					<div className="flex justify-between items-center">
						<span className="font-light text-gray-600">{data.postedOn}</span>
					</div>
					<div className="mt-2">
						<a
							className="text-2xl text-gray-700 font-bold hover:text-gray-600"
							href="#"
						>
							{data.jobTitle}
						</a>
						<p className="mt-2 text-gray-600">
							{data.jobDescription.length > 150 ? (
								<>
									{data.jobDescription.substring(0, 150) + " ....... "}
									<span
										onClick={(e) => handleReadMoreClick(e, data._id)}
										className="text-blue-600 hover:underline cursor-pointer"
									>
										{" "}
										Read More
									</span>
								</>
							) : (
								data.jobDescription
							)}
						</p>
					</div>

					<div className="py-5">
						<h3 className="font-bold text-xs">Skills</h3>
						{/* <!-- This is the tags / Skills container --> */}
						<div className="my-1 flex flex-wrap -m-1">
							{data.skills.map((skill, idx) => (
								<div key={idx}>
									<span className="m-1 bg-indigo-200 hover:bg-indigo-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
										{skill}
									</span>
								</div>
							))}
						</div>

						{data.category && (
							<>
								<h3 className="font-bold text-xs">Category</h3>

								<div className="my-1 flex flex-wrap -m-1">
									<div>
										<span className="m-1 bg-indigo-200 hover:bg-indigo-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
											{data.category}
										</span>
									</div>
								</div>
							</>
						)}
						{data.subCategory && (
							<>
								<h3 className="font-bold text-xs">Sub-Category</h3>
								{/* <!-- This is the tags / Skills container --> */}
								<div className="my-1 flex flex-wrap -m-1">
									<div>
										<span className="m-1 bg-indigo-200 hover:bg-indigo-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
											{data.subCategory}
										</span>
									</div>
								</div>
							</>
						)}
					</div>

					<div className="flex flex-row  space-x-5 ">
						<div className="font-light text-gray-600 flex flex-row space-x-1">
							<svg
								className="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
									clipRule="evenodd"
								/>
							</svg>
							<span>{data.duration}</span>
						</div>
						<div className="font-light text-gray-600 flex flex-row space-x-1">
							<svg
								className="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
									clipRule="evenodd"
								/>
							</svg>
							<span>
								${data.rate}/{data.rateDuration}
							</span>
						</div>
					</div>

					<div className="flex justify-between items-center mt-4">
						<div className="font-light text-gray-600 flex flex-row space-x-1">
							<svg
								className="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
									clipRule="evenodd"
								/>
							</svg>
							<span>
								{data.city && data.city}, {data.zipcode && data.zipcode},{" "}
								{data.state && data.state}
							</span>
						</div>
						<div
							className="cursor-pointer font-light text-gray-600 flex flex-row space-x-1"
							onClick={(e) => viewCandidates(e, "Applied")}
						>
							<span> Applied Candidates (Waiting for Decision): </span>
							<span style={{ color: "red" }}>
								{appliedCandidatesNum && appliedCandidatesNum}{" "}
							</span>
						</div>
					</div>
					<div className="flex justify-between items-center mt-4">
						<div
							className="cursor-pointer font-light text-gray-600 flex flex-row space-x-1"
							onClick={(e) => viewCandidates(e, "Offered")}
						>
							<span> Accepted Candidates: </span>
							<span style={{ color: "red" }}>
								{offeredCandidatesNum && offeredCandidatesNum}{" "}
							</span>
						</div>
						<div
							className="cursor-pointer font-light text-gray-600 flex flex-row space-x-1"
							onClick={(e) => viewCandidates(e, "Denied")}
						>
							<span> Denied Candidates </span>
							<span style={{ color: "red" }}>
								{deniedCandidatesNum && deniedCandidatesNum}{" "}
							</span>
						</div>
					</div>
				</div>
			</li>
		</>
	);
}
PostedJobCard.defaultProps = {
	data: {
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
};

export default PostedJobCard;
