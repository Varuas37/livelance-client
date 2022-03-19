import React, { useEffect, useState } from "react";
import { MinusSmIcon } from "@heroicons/react/solid";
const HandleSearchQueryList = () => {
	const [searchQueryTyped, setSearchQueryTyped] = useState("");
	const [searchQueryList, setSearchQueryList] = useState([]);

	const handleKeyPressed = (e) => {
		e.preventDefault();
		if (e.key === "Enter") {
			setSearchQueryList((prevList) => {
				prevList.push(searchQueryTyped);
			});

			setSearchQueryTyped("");
		}
	};

	const deleteFromSkillsList = (e, skillName) => {
		e.preventDefault();
		setSearchQueryList((prevList) => {
			prevList.splice(searchQueryList.indexOf(skillName), 1);
		});
	};

	return (
		<>
			<div className="mt-1">
				<input
					id="ZipCode"
					name="ZipCode"
					type="ZipCode"
					value={searchQueryTyped}
					onChange={(e) => setSearchQueryTyped(e.target.value)}
					required
					className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					onKeyPress={(e) => handleKeyPressed(e)}
				/>
			</div>
			{searchQueryList &&
				searchQueryList.map((eachSkill, idx) => {
					return (
						<span key={idx}>
							<p style={{ marginTop: "-2px" }}>
								{eachSkill}{" "}
								<span
									style={{
										color: "red",
										fontWeight: "bold",
										cursor: "pointer",
									}}
									onClick={(e) => deleteFromSkillsList(e, eachSkill)}
								>
									{" "}
									X
								</span>
							</p>
						</span>
					);
				})}
		</>
	);
};

export default HandleSearchQueryList;
