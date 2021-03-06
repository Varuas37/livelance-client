import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	loginUser,
	signUpUser,
} from "../../../application/redux/action/authActions";

function SignUp() {	
	const [passwordsMatch, setPasswordsMatch] = useState(false);
	const [user, setUser] = useState({
		role: "freelancer",
		email: "",
		password: "",
		confirmPassword: "",
	});

	let dispatch = useDispatch();
	let navigate = useNavigate();

	const onHandleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		if (user.password === user.confirmPassword) {
			setPasswordsMatch(true);
		} else {
			setPasswordsMatch(false);
		}
	}, [user.password, user.confirmPassword]);

	const onSignUpFormSubmit = async (e) => {
		e.preventDefault();
		const responseBool = await dispatch(signUpUser(user));
		if (responseBool) {
			navigate("/onboarding");
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
										Signup for Livelance
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
												<label
													htmlFor="role"
													className="block text-sm font-medium text-gray-700"
												>
													I'm a
												</label>
												<div className="mt-1">
													<select
														name="role"
														className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
														value={user.role}
														onChange={(e) => onHandleChange(e)}
													>
														<option value="freelancer">
															Non-remote Freelancer
														</option>
														<option value="employer">
															Non-remote Freelance Lister
														</option>
													</select>
												</div>
											</div>

											<div>
												<label
													htmlFor="email"
													className="block text-sm font-medium text-gray-700"
												>
													Email address
												</label>
												<div className="mt-1">
													<input
														id="email"
														name="email"
														value={user.email}
														onChange={(e) => onHandleChange(e)}
														type="email"
														autoComplete="email"
														required
														className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
													/>
												</div>
											</div>

											<div>
												<label
													htmlFor="password"
													className="block text-sm font-medium text-gray-700"
												>
													Password
												</label>
												<div className="mt-1">
													<input
														id="password"
														name="password"
														type="password"
														value={user.password}
														onChange={(e) => onHandleChange(e)}
														autoComplete="current-password"
														required
														className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
													/>
												</div>
											</div>
											<div className="space-y-1">
												<label
													htmlFor="password"
													className="block text-sm font-medium text-gray-700"
												>
													Confirm Password
												</label>
												<div className="mt-1">
													<input
														id="confirm-password"
														name="confirmPassword"
														value={user.confirmPassword}
														onChange={(e) => onHandleChange(e)}
														type="password"
														required
														className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
													/>
												</div>
											</div>

											<div
												className={
													passwordsMatch ? "text-lime-700" : "text-red-700"
												}
											>
												{user.confirmPassword.length > 0 && (
													<p>
														{passwordsMatch
															? "Passwords Match"
															: "Passwords Don't Match"}
													</p>
												)}
											</div>

											{/* <div className="flex items-center justify-between">
												<div className="flex items-center">
													<input
														id="remember-me"
														name="remember-me"
														type="checkbox"
														className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
													/>
													<label
														htmlFor="remember-me"
														className="ml-2 block text-sm text-gray-900"
													>
														Remember me
													</label>
												</div>
											</div> */}

											<div>
												<button
													type="submit"
													className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
													disabled={passwordsMatch ? false : true}
												>
													Sign Up
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

export default SignUp;
