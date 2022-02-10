import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import history from "./presentation/utils/history";
import LandingPage from "./presentation/pages/Landing/LandingPage";
import { Provider } from "react-redux";
import { store, persistor } from "./application/redux/store/store";
import { loadUser } from "./application/redux/action/auth";
import setAuthToken from "./presentation/utils/setAuthToken";

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
						<div className="App">
							<LandingPage />
						</div>
					</Fragment>
				</PersistGate>
			</Router>
		</Provider>
	);
};
export default App;
