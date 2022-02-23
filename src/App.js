import React, { Fragment, useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
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
						<Routes>
							<Route exact path="/" element={<LandingPage />} />
							<Route exact path='/signup' element={<SignUp />} />
							<Route exact path='/signin' element={<Login />} />
							<Route exact path='/home' element={<Home />} />
							<Route exact path='/categories' element={<CategoryDetails />} />
						</Routes>
					</Fragment>
				</PersistGate>
			</Router>
		</Provider>
	);
};
export default App;
