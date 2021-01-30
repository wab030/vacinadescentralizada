import firebase from 'firebase';

const firebaseConfigProd = {
    apiKey: "AIzaSyCe-xC8xK_wLJ6FLpmnPUowPKjMo6ccatw",
    authDomain: "vacina-descentralizada.firebaseapp.com",
    projectId: "vacina-descentralizada",
    storageBucket: "vacina-descentralizada.appspot.com",
    messagingSenderId: "610185372525",
    appId: "1:610185372525:web:2dd51f82c13f6eed7e7064"
};

const firebaseConfigDev = {
    apiKey: "AIzaSyBh8VztoWEIdFAPoc8qfXXJYm3quPgUA1I",
    authDomain: "projeto-dev-8238e.firebaseapp.com",
    projectId: "projeto-dev-8238e",
    storageBucket: "projeto-dev-8238e.appspot.com",
    messagingSenderId: "636931946150",
    appId: "1:636931946150:web:c84feb21b90c3315b56667"
};


let firebaseConfig;
process.env.NODE_ENV === 'production' ? firebaseConfig = firebaseConfigProd : firebaseConfig = firebaseConfigDev;
console.log(process.env.NODE_ENV);

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
