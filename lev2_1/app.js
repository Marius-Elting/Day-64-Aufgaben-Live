import fs from 'fs';
import jsonData from './data.json' assert { type: "json" };


const writeContent = () => {
    return new Promise((resolve, reject) => {
        jsonData.forEach((data) => {
            fs.appendFileSync("data.txt", ` \n ${data.id} - ${data.title} \n ${data.description}`, (err) => { if (err) reject(err); resolve(); });
        });
    });
};

writeContent()
    .then(() => console.log("dataWritten"))
    .catch(err => console.log(err));
