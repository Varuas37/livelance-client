//ANCHOR Logout
import { LOGOUT, USER_LOADED } from "./types";

export const loadUser = () => dispatch => {
    dispatch({ type: USER_LOADED })
}
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT })
}
