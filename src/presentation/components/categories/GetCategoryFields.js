import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { submitCategoryFilter } from "../../../application/redux/action/freelanceActions";
import HandleJobSkillsList from "../jobs/HandleJobSkillsList";

const GetCategoryFields = () => {
	const location = useLocation();

	const [skillsList, setSkillsList] = useState([]);

	const [categoryFields, setCategoryFields] = useState({
		max: "",
		min: "",
		skills: [],
		minRating: "",
	});

	const onHandleChange = (e) => {
		setCategoryFields({
			...categoryFields,
			[e.target.name]: e.target.value,
		});
	};
	let dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(submitCategoryFilter(categoryFields));
	};
	return (
		<>
			{location.pathname.includes("/categories") && (
				<form onSubmit={submitHandler} method="POST" className="space-y-6">
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Maximum Pay
						</label>
						<div className="mt-1">
							<input
								name="max"
								value={categoryFields.max}
								onChange={(e) => onHandleChange(e)}
								type="text"
								required
								className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							/>
						</div>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Minimum Pay
						</label>
						<div className="mt-1">
							<input
								name="min"
								value={categoryFields.min}
								onChange={(e) => onHandleChange(e)}
								type="text"
								required
								className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							/>
						</div>
					</div>

					<div>
						<label
							htmlFor="PayRange"
							className="block text-sm font-medium text-gray-700"
						>
							Skills List
						</label>
						<HandleJobSkillsList
							props={{
								mutableObject: categoryFields,
								setMutableObject: setCategoryFields,
								skillsList: skillsList,
								setSkillsList: setSkillsList,
								placeholder: "Type skills and press enter",
							}}
						/>
					</div>

					<div>
						<label
							htmlFor="PayRange"
							className="block text-sm font-medium text-gray-700"
						>
							Minimum Rating
						</label>
						<div className="mt-1">
							<select
								name="minRating"
								className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								value={categoryFields.minRating}
								onChange={(e) => onHandleChange(e)}
								style={{ fontSize: "24px" }}
							>
								<option value="1">*</option>
								<option value="2">**</option>
								<option value="3">***</option>
								<option value="4">****</option>
								<option value="5">*****</option>
							</select>
						</div>
					</div>

					<button
						className="cursor-pointer m-8 mt-6 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
						type="submit"
					>
						Submit
					</button>
				</form>
			)}
		</>
	);
};

export default GetCategoryFields;
