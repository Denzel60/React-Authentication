// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GithubAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8XQfxpFw_inT38D3Qjfz2XAM-xLFbmgo",
  authDomain: "user-authentication-fbb3f.firebaseapp.com",
  projectId: "user-authentication-fbb3f",
  storageBucket: "user-authentication-fbb3f.appspot.com",
  messagingSenderId: "497539998328",
  appId: "1:497539998328:web:6819cdb61f711ea8c2838d",
  measurementId: "G-HVE81HLTSR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GithubAuthProvider();
export { auth, provider };
