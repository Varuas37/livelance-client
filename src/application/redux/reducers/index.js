import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import alert from "./alert";
import freelanceReducer from "./freelanceReducer";
import profileReducer from "./profileReducer";
import auth from "./auth";

const persistConfig = {
	key: "root",
	storage,
	whitelist: [alert],
};

const rootReducer = combineReducers({
	alert,
	freelanceReducer,
	profileReducer,
});

export default persistReducer(persistConfig, rootReducer);
