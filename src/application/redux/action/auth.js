//ANCHOR Logout
import { LOGOUT } from "./types";

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT })
}
