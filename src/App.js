import React, { Fragment, useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import history from "./presentation/utils/history";
import LandingPage from "./presentation/pages/Landing/LandingPage";
import { Provider, useDispatch, useSelector } from "react-redux";
import SearchPage from "./presentation/pages/search/SearchPage";
import SignIn from "./presentation/pages/auth/Signin";
import { checkUser } from "./application/redux/action/authActions";
import { store, persistor } from "./application/redux/store/store";
import { loadUser } from "./application/redux/action/auth";
import setAuthToken from "./presentation/utils/setAuthToken";
import SignUp from "./presentation/pages/auth/Signup";
import Login from "./presentation/pages/auth/Signin";

import CategoryGrid from "./presentation/components/core/CategoryGrid";
import CategoryDetails from "./presentation/pages/categories/CategoryDetails";
import UserProfile from "./presentation/pages/profile/UserProfile";
import Sidebar from "./presentation/components/Sidebar";
import StaticSidebar from "./presentation/components/StaticSidebar";
import GetSidebar from "./presentation/utils/GetSidebar";
import Modal from "./presentation/components/core/modal";
import JobDetailModal from "./presentation/pages/jobDetail/JobDetailModal";
import Onboarding from "./presentation/pages/onboarding/Onboarding";
import EditProfileModal from "./presentation/pages/profile/EditProfileModal";
import Offers from "./presentation/pages/job/Offers";
import Denied from "./presentation/pages/job/Denied";
import Applied from "./presentation/pages/job/Applied";
import GetMyJobsNavigation from "./presentation/utils/GetMyJobsNavigation";
import SavedJobs from "./presentation/pages/job/SavedJobs";
import GenericJobDetailModal from "./presentation/components/jobs/GenericJobDetailModal";
import PostedJobs from "./presentation/pages/job/PostedJobs";
import PostJobModal from "./presentation/components/jobs/PostJobModal";

import SortPage from "./presentation/pages/sort/SortPage";
import Messenger from "./presentation/pages/messenger/Chat";
import MessengerProfile from "./presentation/pages/messenger/Chat_Profile";
import { setFreelanceIdListByStatus } from "./application/redux/action/freelanceActions";
import ViewProfile from "./presentation/pages/profile/ViewProfile";
import ViewCandidates from "./presentation/pages/candidates/ViewCandidates";
import HomeFeed from "./presentation/pages/home/HomeFeed";
import Accepted from "./presentation/pages/job/Accepted";
// if (localStorage.token) {
// 	setAuthToken(localStorage.token);
// }

const App = () => {
	const isUserAuthenticated = useSelector(
		(state) => state.authReducer.isUserAuthenticated
	);

	let dispatch = useDispatch();
	useEffect(() => {
		if (localStorage.LLtoken) {
			dispatch(checkUser());
			dispatch(setFreelanceIdListByStatus("Applied"));
			dispatch(setFreelanceIdListByStatus("Saved"));
		}
	}, []);

	return (
		<Router history={history}>
			<PersistGate persistor={persistor}>
				<Fragment>
					{/* <StaticSidebar /> */}

					{/* <Sidebar/> */}
					<GetSidebar />
					<GetMyJobsNavigation />
					<Routes>

						{/*messenger page old ver*/}
<<<<<<< HEAD
						<Route exact path="/messengeralt" element={<Chat />} />
						{/* TODO: make this conditional i foreget how */}

=======
						<Route exact path="/messenger" element={<Messenger />} />
						<Route exact path="/messengerProfile" element={<MessengerProfile />} />
>>>>>>> 93e2c54e8dbe15b2e3367ff4997aad928f66df54

						<Route exact path="/" element={<LandingPage />} />
						<Route exact path="/signup" element={<SignUp />} />
						{/* <Route
							exact
							path="/signup"
							element={
								!isUserAuthenticated ? <SignUp /> : <Navigate to="/home" />
							}
						/> */}

						<Route
							exact
							path="/signin"
							element={
								!isUserAuthenticated ? <SignIn /> : <Navigate to="/home" />
							}
						/>
						<Route
							exact
							path="/home"
							element={isUserAuthenticated ? <HomeFeed /> : <SignIn />}
						/>

						<Route exact path="/search" element={<SearchPage />} />
						{/* <Route exact path="/home/sort/:sortterm" element={<SortPage />} /> */}
						<Route exact path="/categories" element={<CategoryDetails />} />
						<Route exact path="/profile" element={<UserProfile />} />
						<Route exact path="/viewprofile/:id" element={<ViewProfile />} />
						<Route
							exact
							path="/viewcandidates/:jobId/:status"
							element={<ViewCandidates />}
						/>
						{/* <Route exact path="/jobdetail" element={<JobDetailModal />} /> */}
						{/* <Route
							exact
							path="/jobdetail/:myjobtype/:id"
							element={<GenericJobDetailModal />}
						/> */}
						<Route exact path="/onboarding" element={<Onboarding />} />
						<Route exact path="/profile/edit" element={<EditProfileModal />} />

						<Route exact path="/myjobs/saved" element={<SavedJobs />} />
						<Route exact path="/myjobs/offers" element={<Offers />} />
						<Route exact path="/myjobs/denied" element={<Denied />} />
						<Route exact path="/myjobs/accepted" element={<Accepted />} />
						<Route exact path="/myjobs/applied" element={<Applied />} />
						<Route exact path="/postedjobs" element={<PostedJobs />} />
						<Route exact path="/postjob" element={<PostJobModal />} />
					</Routes>
				</Fragment>
			</PersistGate>
		</Router>
	);
};
export default App;
