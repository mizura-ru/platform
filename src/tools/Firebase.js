import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD1gAJuDSYvnbgKOnTIILT5uvLIp4sWjT8",
  authDomain: "mizura-ru.firebaseapp.com",
  projectId: "mizura-ru",
  storageBucket: "mizura-ru.firebasestorage.app",
  messagingSenderId: "667714193008",
  appId: "1:667714193008:web:29e43ccab5218bdd0116b5",
  measurementId: "G-LETM69FNEL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;