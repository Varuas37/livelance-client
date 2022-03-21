export const host = "http://localhost:5501";

// TODO: these are other auth routes, delete or refactor
export const loginRoute = `${host}/api/auth/login`;
export const registerRoute = `${host}/api/auth/register`;
export const logoutRoute = `${host}/api/auth/logout`;
export const allUsersRoute = `${host}/api/auth/allusers`;

export const chatHost = "http://localhost:5501";

export const sendMessageRoute = `${chatHost}/api/messages/addmsg`;
export const recieveMessageRoute = `${chatHost}/api/messages/getmsg`;
export const setAvatarRoute = `${chatHost}/api/auth/setavatar`;
