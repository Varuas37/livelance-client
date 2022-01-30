import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import alert from "./alert";
import auth from "./auth";

const persistConfig = {
    key: "root",
    storage,
    whitelist: [alert],
};

const rootReducer = combineReducers({
    alert,
});

export default persistReducer(persistConfig, rootReducer);
