import fs from 'fs';

const createFile = (param) => {
    return new Promise((resolve, reject) => {
        fs.mkdir('./assets', (err) => {
            if (err) return err;
        });
        fs.access('./assets/text.txt', fs.constants.F_OK, (err) => {
            if (err) reject(param, err);
            else resolve(param);
        });
    });
};

createFile("\n Ich bin Inhalt des Parameters")
    .then((param) => {
        fs.appendFile('./assets/text.txt', param, (err) => {
            if (err) throw err;
            console.log('Saved!');
        });
    })
    .catch((param, err) => {
        fs.writeFile('./assets/text.txt', param, (err) => {
            if (err) return err;
        });
        console.log(err);
    })

