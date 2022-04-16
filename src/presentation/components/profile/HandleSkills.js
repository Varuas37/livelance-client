import React, { useEffect, useState } from "react";
import { MinusSmIcon } from "@heroicons/react/solid";
const HandleSkills = ({ props }) => {
	const [skillTyped, setSkillTyped] = useState("");
	const handleKeyPressed = (e) => {
		if (e.key === "Enter") {
			props.setMutableObject({
				...props.mutableObject,
				[props.field]: props.mutableObject[props.field].concat(skillTyped),
			});
			setSkillTyped("");
		}
	};

	const deleteFromSkillsList = (e, skillName) => {
		e.preventDefault();

		const array = props.mutableObject[props.field];
		array.splice(array.indexOf(skillName), 1);

		props.setMutableObject({
			...props.mutableObject,
			[props.field]: array,
		});
	};

	// useEffect(() => {}, [props.skillsList]);
	return (
		<>
			<div className="mt-1">
				<input
					id="ZipCode"
					name="ZipCode"
					type="ZipCode"
					value={skillTyped}
					onChange={(e) => setSkillTyped(e.target.value)}
					autoComplete="ZipCode"
					required
					className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					onKeyPress={(e) => handleKeyPressed(e)}
				/>
			</div>
			{props.mutableObject[props.field] &&
				props.mutableObject[props.field].map((eachSkill, idx) => {
					return (
						<span key={idx}>
							<span style={{ margin: "-2px 4px 0" }}>
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
							</span>
						</span>
					);
				})}
		</>
	);
};

export default HandleSkills;
