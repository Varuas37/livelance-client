import React, { useEffect, useRef, useState } from "react";
import { MinusSmIcon } from "@heroicons/react/solid";
import { categoriesList } from "../categories/categoriesVariables";
const HandleOptionSelected = ({ props }) => {
	const didMountRef = useRef(false);
	const [skillTyped, setSkillTyped] = useState("");
	// const [props.optionSelected, props.setOptionSelected] = useState("");

	const handleKeyPressed = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();

			props.setMutableObject({
				...props.mutableObject,
				[props.columnName]:
					props.mutableObject[props.columnName].concat(skillTyped),
			});

			setSkillTyped("");
		}
	};

	useEffect(() => {
		if (didMountRef.current) {
			// setCurFreelancenrsList(freelancersListForHomePage);
			if (props.optionSelected) {
				props.setMutableObject({
					...props.mutableObject,
					[props.columnName]: Array.from(
						new Set(
							props.mutableObject[props.columnName].concat(props.optionSelected)
						)
					),
				});
			}

			// console.log(optionSelected)
		}
		didMountRef.current = true;
	}, [props.optionSelected]);

	const deleteFromSkillsList = (e, skillName) => {
		e.preventDefault();
		const array = props.mutableObject[props.columnName];
		array.splice(array.indexOf(skillName), 1);
		props.setMutableObject({
			...props.mutableObject,
			[props.columnName]: array,
		});
	};

	// useEffect(() => {}, [props.mutableObject.skills]);
	return (
		<>
			<div className="mt-1">
				{/* <input
					id="ZipCode"
					name="ZipCode"
					type="ZipCode"
					value={skillTyped}
					onChange={(e) => setSkillTyped(e.target.value)}
					placeholder={props.placeholder}
					className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					onKeyPress={(e) => handleKeyPressed(e)}
				/> */}
				<select
					name="category"
					value={props.optionSelected}
					onChange={(e) => props.setOptionSelected(e.target.value)}
					className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				>
					<option value="" disabled>Select</option>
					{categoriesList.map((category, idx) => (
						<option key={idx} value={category}>
							{category}
						</option>
					))}
				</select>
			</div>
			{props.mutableObject[props.columnName] &&
				props.mutableObject[props.columnName].map((eachSkill, idx) => {
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

export default HandleOptionSelected;
