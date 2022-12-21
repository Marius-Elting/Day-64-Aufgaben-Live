import fs from 'fs';
// Promises
// Ein Promise hat 3 verschiedene Status 
/*
    -Pending (Der Prozess läuft noch)
    -Fillfilled (Erfolgreich beendet)
    -Rejected (Mit einem Error beendet)
*/


const myPromise = new Promise((resolve, reject) => {
    // hier kommen unsere async operationen 
    fs.writeFile('./batcave', "Alfred räumt auf", (err) => {
        if (err) reject(err);
        else resolve("OK");
    });
});

// .then wird ausgeführt wenn das Promise resolved bzw. fulfilled ist 
// .catch wird ausgeführt wenn das Promise rejected wird  => nicht pflicht aber gut 
// .finally wird immer ausgeführt egal was für ein Ergebnis das Promise liefert => optional

myPromise
    // then hängt mit Resolve zusammen
    .then(state => console.log(state))
    // Catch hängt mit rejected zusammen
    .catch(err => console.log(err))
    // finally wird unabhängig gausgeführt 
    .finally(fin => console.log("finally"));
console.log(myPromise);