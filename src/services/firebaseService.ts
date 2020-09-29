import "@firebase/auth";
import firebase from "firebase";
import Config from "../config/firebase";

firebase.initializeApp(Config);

export default firebase;
