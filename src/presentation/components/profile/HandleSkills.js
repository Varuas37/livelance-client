import React, { useEffect, useState } from "react";
import { MinusSmIcon } from "@heroicons/react/solid";
const HandleSkills = ({ props }) => {
	const [skillTyped, setSkillTyped] = useState("");
	const handleKeyPressed = (e) => {
		if (e.key === "Enter") {
			props.setMutableObject({
				...props.mutableObject,
				fields: {
					...props.mutableObject.fields,
					Skills: props.mutableObject.fields.Skills + ", " + skillTyped,
				},
			});
			props.setSkillsList([...props.skillsList, skillTyped]);
			setSkillTyped("");
		}
	};

	const deleteFromSkillsList = (e, skillName) => {
		e.preventDefault();

		props.setSkillsList((skillsList) =>
			skillsList.filter((eachSkill) => eachSkill !== skillName)
		);

		const array = props.mutableObject.fields.Skills.split(",");
		array.splice(array.indexOf(skillName), 1);

		props.setMutableObject({
			...props.mutableObject,
			fields: {
				...props.mutableObject.fields,
				Skills: array.join(","),
			},
		});
	};

	useEffect(() => {}, [props.skillsList]);
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
			{props.skillsList &&
				props.skillsList.map((eachSkill, idx) => {
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

export default HandleSkills;
