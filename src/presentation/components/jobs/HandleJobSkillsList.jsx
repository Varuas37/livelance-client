import React, { useEffect, useState } from "react";
import { MinusSmIcon } from "@heroicons/react/solid";
const HandleJobSkillsList = ({ props }) => {
	const [skillTyped, setSkillTyped] = useState("");
	// console.log(props.screenName);

	const handleKeyPressed = (e) => {
		if (e.key === "Enter") {
			props.setMutableObject({
				...props.mutableObject,
				skills: props.mutableObject.skills.concat(skillTyped),
			});

			setSkillTyped("");
		}
	};

	const deleteFromSkillsList = (e, skillName) => {
		e.preventDefault();
		const array = props.mutableObject.skills;
		array.splice(array.indexOf(skillName), 1);
		props.setMutableObject({
			...props.mutableObject,
			skills: array,
		});
	};

	useEffect(() => {}, [props.mutableObject.skills]);
	return (
		<>
			<div className="mt-1">
				<input
					id="ZipCode"
					name="ZipCode"
					type="ZipCode"
					value={skillTyped}
					onChange={(e) => setSkillTyped(e.target.value)}
					placeholder={props.placeholder}
					required
					className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					onKeyPress={(e) => handleKeyPressed(e)}
				/>
			</div>
			{props.mutableObject.skills &&
				props.mutableObject.skills.map((eachSkill, idx) => {
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

export default HandleJobSkillsList;
