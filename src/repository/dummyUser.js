const user = {
	userId: "123",
	role: "freelancer",
	email: "john@john.com",
	password: "john",
};
const userSignup = {
	userId: "123",
	role: "freelancer",
	email: "john@john.com",
	password: "john",
	confirmPassword: "john",
	name: "john john",
	gender: "Man",
	ZipCode: "john",
};

const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiZnJlZWxhbmNlciIsImVtYWlsIjoiam9obkBkb2UuY29tIiwicGFzc3dvcmQiOiJqb2huZG9lIn0.lbTUzs-82dxi7MJawszVF8hZtn0IWy-w594SYL_Ww20";

export function verifyUser(signinUser) {
	if (compareObjects(signinUser, user)) {
		return { data: { token: token } };
	} else {
		return { data: { token: "invalid user" } };
	}
}
export function verifyUserForSignUp(signUpUser) {
	console.log(signUpUser, userSignup);
	if (compareObjects(signUpUser, userSignup)) {
		return { data: { token: token } };
	} else {
		return { data: { token: "invalid user" } };
	}
}

function compareObjects(object1, object2) {
	const keys1 = Object.keys(object1);
	const keys2 = Object.keys(object2);
	if (keys1.length !== keys2.length) {
		return false;
	}
	for (const key of keys1) {
		const val1 = object1[key];
		const val2 = object2[key];
		const areObjects = isObject(val1) && isObject(val2);
		if (
			(areObjects && !compareObjects(val1, val2)) ||
			(!areObjects && val1 !== val2)
		) {
			return false;
		}
	}
	return true;
}

function isObject(object) {
	return object != null && typeof object === "object";
}
