import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB-PBRSpyli8_TmAOT0y_vMrECK5ynE4wc",
  authDomain: "my-portfolio-3d2ed.firebaseapp.com",
  projectId: "my-portfolio-3d2ed",
  storageBucket: "my-portfolio-3d2ed.appspot.com",
  messagingSenderId: "670489884366",
  appId: "1:670489884366:web:43624999dd2674b654029f",
  measurementId: "G-N1CJ9XT6RZ",
    // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://my-portfolio-3d2ed-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
