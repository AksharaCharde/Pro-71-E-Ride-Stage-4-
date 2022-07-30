import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDCVm2_Wfp2er29HKZmqYVAFHU_YWiFk2g",
    authDomain: "e-ride-stage-4-96a89.firebaseapp.com",
    projectId: "e-ride-stage-4-96a89",
    storageBucket: "e-ride-stage-4-96a89.appspot.com",
    messagingSenderId: "12910030228",
    appId: "1:12910030228:web:5197009f85e0c642bf7381"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
