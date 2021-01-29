import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCe-xC8xK_wLJ6FLpmnPUowPKjMo6ccatw",
    authDomain: "vacina-descentralizada.firebaseapp.com",
    projectId: "vacina-descentralizada",
    storageBucket: "vacina-descentralizada.appspot.com",
    messagingSenderId: "610185372525",
    appId: "1:610185372525:web:2dd51f82c13f6eed7e7064"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

// export const firebaseImpl = firebase.initializeApp(config);
// export const firebaseDatabase = firebase.database();
