import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import history from "./presentation/utils/history";
import LandingPage from "./presentation/pages/Landing/LandingPage";
import { Provider } from "react-redux";
import { store, persistor } from "./application/redux/store/store";
import { loadUser } from "./application/redux/action/auth";
import setAuthToken from "./presentation/utils/setAuthToken";
import SignUp from "./presentation/pages/auth/Signup";
import Login from "./presentation/pages/auth/Signin";
import Home from "./presentation/pages/home/Home";
import CategoryGrid from "./presentation/components/core/CategoryGrid";
import CategoryDetails from "./presentation/pages/categories/CategoryDetails";
import UserProfile from "./presentation/pages/profile/UserProfile";
import JobDetail from "./presentation/pages/jobDetail/JobDetail";
import Sidebar from "./presentation/components/Sidebar";
import StaticSidebar from "./presentation/components/StaticSidebar";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<Router history={history}>
				<PersistGate persistor={persistor}>
					<Fragment>
						{/* <StaticSidebar /> */}

						{/* <Sidebar/> */}
						<Routes>
							<Route exact path="/" element={<LandingPage />} />
							<Route exact path="/signup" element={<SignUp />} />
							<Route exact path="/signin" element={<Login />} />
							<Route exact path="/home" element={<Home />} />
							<Route exact path="/categories" element={<CategoryDetails />} />
							<Route exact path="/profile" element={<UserProfile />} />
							<Route exact path="/jobdetail/:id" element={<JobDetail />} />
						</Routes>
					</Fragment>
				</PersistGate>
			</Router>
		</Provider>
	);
};
export default App;
