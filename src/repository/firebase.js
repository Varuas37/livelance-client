import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// old store
// const firebaseConfig = {
//     apiKey: "AIzaSyCtEUqZAIu8iuK_vMVmfW6P-GFGZEIolpI",
//     authDomain: "fir-image-a94c7.firebaseapp.com",
//     projectId: "fir-image-a94c7",
//     storageBucket: "fir-image-a94c7.appspot.com",
//     messagingSenderId: "164184960711",
//     appId: "1:164184960711:web:f5b66b89aa8ac7613298e2",
//     measurementId: "G-1WGG6LHY0F"
//   };

// new store
const firebaseConfig = {
	apiKey: "AIzaSyAlumqyIm301OoxsDAucjHZEIOqXg-3BoU",
	authDomain: "livelanc.firebaseapp.com",
	projectId: "livelanc",
	storageBucket: "livelanc.appspot.com",
	messagingSenderId: "921302382600",
	appId: "1:921302382600:web:cde523ebaed4ff9f65f9bd",
	measurementId: "G-FFEC0G2GEC",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
