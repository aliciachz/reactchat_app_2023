import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-cy1zN0MKPqmjy8q3u8ll_2tQwhld5zA",
  authDomain: "kakaoapp-fbef7.firebaseapp.com",
  databaseURL: "https://kakaoapp-fbef7-default-rtdb.firebaseio.com",
  projectId: "kakaoapp-fbef7",
  storageBucket: "kakaoapp-fbef7.appspot.com",
  messagingSenderId: "1059806576887",
  appId: "1:1059806576887:web:06230a4112ea9a50af93f2",
  measurementId: "G-H8LMN02PB7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export const authService = getAuth(app);
export { app, db, storage };