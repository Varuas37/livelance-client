import { fetchDummyProfile } from "../../../repository/dummyProfile";
import { SET_PROFILE, EDIT_AND_SAVE_PROFILE } from "./types";

export const setProfile = () => async (dispatch) => {
	const response = fetchDummyProfile();
	dispatch({ type: SET_PROFILE, payload: response.data });
};

export const editAndSetProfile = (profile) => async (dispatch) => {	
	dispatch({ type: EDIT_AND_SAVE_PROFILE, payload: profile });
};
