import React, { useEffect, useRef, useState } from "react";
import { MinusSmIcon } from "@heroicons/react/solid";
import {
	categoriesList,
	categoriesObject,
} from "../categories/categoriesVariables";
import { categoriesAndSubCategories } from "../categories/subCategoriesData";
const HandleSubOptionSelected = ({ props }) => {
	const didMountRef = useRef(false);
	const didMountRefSub = useRef(false);
	const [skillTyped, setSkillTyped] = useState("");
	const [subOptionSelected, setSubOptionSelected] = useState("");
	const [subCategoriesListSet, setSubCategoriesListSet] = useState(new Set([]));
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

	// console.log(subOptionSelected)

	useEffect(() => {
		console.log("running");
		if (subOptionSelected) {
			props.setMutableObject({
				...props.mutableObject,
				[props.columnName]: Array.from(
					new Set(
						props.mutableObject[props.columnName].concat(subOptionSelected)
					)
				),
			});
		}
		if (didMountRef.current) {
		}
		didMountRef.current = true;
	}, [subOptionSelected]);

	// useEffect(() => {
	// 	if (didMountRefSub.current) {
	// 		// setCurFreelancenrsList(freelancersListForHomePage);
	// 	}
	// 	Array.from(new Set(props.mutableObject[props.keyName])).map((each) => {
	// 		each in categoriesObject &&
	// 			// categoriesObject[each].forEach((item) =>
	// 			// 	setSubCategoriesListSet((prev) => prev.add(item))
	// 			// );
	// 			setSubCategoriesListSet(
	// 				(prev) => new Set([...prev, categoriesObject[each]])
	// 			);
	// 		// setSubCategoriesListSet((prev) => new Set(...prev, ...categoriesObject[each]));
	// 	});
	// 	didMountRefSub.current = true;
	// 	console.log("this");
	// }, [props.mutableObject[props.keyName]]);

	const deleteFromSkillsList = (e, skillName) => {
		e.preventDefault();
		const array = props.mutableObject[props.columnName];
		array.splice(array.indexOf(skillName), 1);
		props.setMutableObject({
			...props.mutableObject,
			[props.columnName]: array,
		});
	};

	return (
		<>
			<div className="mt-1">
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
						value={subOptionSelected}
						onChange={(e) => setSubOptionSelected(e.target.value)}
						className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					>
						<option>
							Select
						</option>

						{/* {props.mutableObject[props.keyName] &&
							props.mutableObject[props.keyName].map(
								(each) =>
									each in categoriesAndSubCategories &&
									categoriesAndSubCategories[each].map(
										(eachSubCategory, idx) => (
											<option key={idx} value={eachSubCategory}>
												{eachSubCategory}
											</option>
										)
									)
							)} */}
						{props.optionSelected in categoriesAndSubCategories &&
							categoriesAndSubCategories[props.optionSelected].map(
								(eachSubCategory) => (
									<option key={eachSubCategory} value={eachSubCategory}>
										{eachSubCategory}
									</option>
								)
							)}
					</select>
				</div>
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

export default HandleSubOptionSelected;
