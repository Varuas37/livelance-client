import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	loginUser,
	signUpUser,
} from "../../../application/redux/action/authActions";
import HandleJobSkillsList from "../../components/jobs/HandleJobSkillsList";
import ImageHandler from "../../utils/ImageHandler";

function Onboarding() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [skillsList, setSkillsList] = useState([]);
	const [categoriesList, setCategoriesList] = useState([]);

	const [user, setUser] = useState({
		userId: "123",
		name: "",
		gender: "Man",
		ZipCode: "",
		imageUrl: "#",
		skills: [],
		categories: [],
	});

	const [userParts, setUserParts] = useState({
		userId: "123",
		role: user.role,
		email: user.email,
		password: user.password,
	});

	let dispatch = useDispatch();
	let navigate = useNavigate();

	const onHandleChange = (e) => {
		if (e.target.name === "firstName") {
			setFirstName(e.target.value);
			setUser({
				...user,
				name: e.target.value + " " + lastName,
			});
		} else if (e.target.name === "lastName") {
			setLastName(e.target.value);
			setUser({
				...user,
				name: firstName + " " + e.target.value,
			});
		} else {
			setUser({
				...user,
				[e.target.name]: e.target.value,
			});
		}
	};

	const onSignUpFormSubmit = async (e) => {
		e.preventDefault();
		const resp = await dispatch(signUpUser(user));
		if (resp) {
			navigate("/home");
		}
	};

	return (
		<>
			<div className="h-screen bg-white">
				<div className="h-full">
					<div className="min-h-full flex">
						<div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
							<div className="mx-auto w-full max-w-sm lg:w-96">
								<div>
									<img
										className="h-12 w-auto"
										src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
										alt="Workflow"
									/>
									<h2 className="mt-6 text-3xl font-extrabold text-gray-900">
										Set Up Profile
									</h2>
									<h2 className="cursor-pointer mt-6 ml-64 text-1xl font-bold text-blue-900">
										Skip for now
									</h2>
								</div>

								<div className="mt-8">
									<div className="mt-6">
										<form
											onSubmit={onSignUpFormSubmit}
											method="POST"
											className="space-y-6"
										>
											<div>
												<label className="block text-sm font-medium text-gray-700">
													Profile Picture
												</label>

												<ImageHandler
													props={{
														sectionMediaTitle: "Change Above Image",
														sectionMediaValue: user,
														setSectionMediaLink: setUser,
														columnName: "imageUrl",
													}}
												/>
											</div>
											<div className="flex flex-row md-flex-col space-x-5">
												<div>
													<label className="block text-sm font-medium text-gray-700">
														First Name
													</label>
													<div className="mt-1">
														<input
															id="firstName"
															name="firstName"
															value={firstName}
															onChange={(e) => onHandleChange(e)}
															type="text"
															autoComplete="given-name"
															required
															className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
														/>
													</div>
												</div>
												<div>
													<label className="block text-sm font-medium text-gray-700">
														Last Name
													</label>
													<div className="mt-1">
														<input
															id="lastName"
															name="lastName"
															value={lastName}
															onChange={(e) => onHandleChange(e)}
															type="text"
															autoComplete="family-name"
															required
															className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
														/>
													</div>
												</div>
											</div>
											<div className="flex flex-row md-flex-col space-x-5">
												<div className="w-1/2">
													<label className="block text-sm font-medium text-gray-700">
														Gender
													</label>
													<select
														id="gender"
														name="gender"
														value={user.gender}
														onChange={(e) => onHandleChange(e)}
														className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
													>
														<option value="Man">Man</option>
														<option value="Woman">Woman</option>
														<option value="Other">Other</option>
													</select>
												</div>
												<div>
													<label className="block text-sm font-medium text-gray-700">
														Zip Code
													</label>
													<div className="mt-1">
														<input
															id="zipcode"
															name="ZipCode"
															value={user.ZipCode}
															onChange={(e) => onHandleChange(e)}
															type="text"
															autoComplete="postal-code"
															required
															className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
														/>
													</div>
												</div>
											</div>

											<div>
												<label
													htmlFor="PayRange"
													className="block text-sm font-medium text-gray-700"
												>
													Skills
												</label>
												<HandleJobSkillsList
													props={{
														mutableObject: user,
														setMutableObject: setUser,
														skillsList: skillsList,
														setSkillsList: setSkillsList,
														columnName: "skills",
														placeholder: "Type in Skills and Press Enter",
													}}
												/>
											</div>

											<div>
												<label
													htmlFor="PayRange"
													className="block text-sm font-medium text-gray-700"
												>
													Categories
												</label>
												<HandleJobSkillsList
													props={{
														mutableObject: user,
														setMutableObject: setUser,
														skillsList: categoriesList,
														setSkillsList: setCategoriesList,
														columnName: "categories",
														placeholder: "Type in Categories and Press Enter",
													}}
												/>
											</div>

											<div>
												<button
													type="submit"
													className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
												>
													Create Profile
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div className="hidden lg:block relative w-0 flex-1">
							<img
								className="absolute inset-0 h-full w-full object-cover"
								src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Onboarding;
