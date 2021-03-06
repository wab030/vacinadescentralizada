//Lê os dados do abaixo assinado e grava em um arquivo. 
const admin = require('firebase-admin');
const fs = require('fs');
const outputFile = process.argv.slice(2)[0];
console.log(outputFile)
if (!outputFile) { console.log("A script deve ser executada como readdata <nome do arquivo de saída>"); return }
const fileToStore = outputFile + '.txt';

let serviceAccount = require('./vacina-descentralizada-firebase-adminsdk-yy4r9-1423beb5ec.json');

const supportersDB = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://vacina-descentralizada.firebaseio.com"
});

const supporters = supportersDB.firestore().collection('supporters');
let lineToStore = "Nome, Email, Phone"
fs.appendFile(outputFile, lineToStore + '\n', async function (err) {
    if (err) return console.log(err);
    console.log("Gravando pessoas que assinaram");
});
supporters.get().then((docs) => {
    docs.forEach((doc) => {
        let supporterId = doc.id;
        let supporter = doc.data();
        console.log(supporter);
        let lineToStore;
        lineToStore = supporter.name + ',' + supporter.surname + ',' + supporter.email + ',' + supporter.phone + ',' + supporter.comment + ',' + supporter.timestamp;
        fs.appendFile(fileToStore, lineToStore + '\n', async function (err) {
            if (err) return console.log(err);
            console.log("Gravando dados ");
        });
    });
});
