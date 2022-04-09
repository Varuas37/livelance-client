import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { loginUser } from "../../../application/redux/action/authActions";
import { useDispatch, useSelector } from "react-redux";



function SignIn() {

	const navigate = useNavigate();
	const [signin, setSignin] = useState({
		email: "",
		password: "",
	//	_id: "624a011ddf00bf27080fc4ef"
	});
	

	const onHandleChange = (e) => {
		setSignin({
			...signin,
			[e.target.name]: e.target.value,
		});
	};

	//var _id = "624a011ddf00bf27080fc4ef";

	let dispatch = useDispatch();
	const onSignInFormSubmit = async (e) => {
		e.preventDefault();
		dispatch(loginUser(signin));
		


		//const { email, password, } = signin;
	//	const { data } = await MainApi.post("/auth/signin", {
	//		email: e.email,
	//		password: e.password,
	//		_id: e._id(),
	//	});
//
			//	localStorage.setItem(
			//	process.env.REACT_APP_LOCALHOST_KEY,
			//	JSON.stringify(data)
			//  );
			  	
		// if (resp) {
		// 	navigate("/home");
		// }

		
	};
	return (
		<>			
			<div className="h-screen">
				<div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
					<div className="sm:mx-auto sm:w-full sm:max-w-md">
						<Link to="/">
							<img
								className="mx-auto h-12 w-auto"
								src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
								alt="Workflow"
							/>
						</Link>
						<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
							Sign in to your account
						</h2>
					</div>

					<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
						<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
							<form
								className="space-y-6"
								onSubmit={onSignInFormSubmit}
								method="POST"
							>
								{/* <div>
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
											value={signin.role}
											onChange={(e) => onHandleChange(e)}
										>
											<option value="freelancer">Non-remote Freelancer</option>
											<option value="lister">
												Non-remote Freelance Lister
											</option>
										</select>
									</div>
								</div> */}
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
											value={signin.email}
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
											value={signin.password}
											onChange={(e) => onHandleChange(e)}
											autoComplete="current-password"
											required
											className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										/>
									</div>
								</div>

								<div className="flex items-center justify-between">
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

									{/* <div className="text-sm">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Forgot your password?
                                        </a>
                                    </div> */}
								</div>

								<div>
									<button
										type="submit"
										className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										Sign in
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default SignIn;
