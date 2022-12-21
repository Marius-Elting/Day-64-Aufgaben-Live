import fs from 'fs';

const createTXTFile = (path, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
};


createTXTFile("./blog1.txt", "was GHGEHT")
    .then(() => console.log("Blog1 wurde erstellt"))
    .catch(err => console.log(err));

createTXTFile("./blog2.txt", "was GHGEHT")
    .then(() => console.log("Blog2 wurde erstellt"))
    .catch(err => console.log(err));

createTXTFile("./delete.txt", "")
    .then(() => console.log("delete wurde erstellt"))
    .catch(err => console.log(err));

createTXTFile("./hello.txt", "")
    .then(() => console.log("hello wurde erstellt"))
    .catch(err => console.log(err));


const createFolder = (path) => {
    return new Promise((resolve, reject) => {
        fs.mkdir(path, (err) => {
            if (err) reject(err);
            resolve();
        });
    });
};

createFolder("./assets")
    .then(() => console.log("assets erstellt"))
    .catch(err => console.log(err));

const CheckFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.access(path, fs.constants.F_OK, (err) => {
            if (err) reject(err);
            else {
                fs.rm(path, { recursive: true, force: true }, (err) => {
                    if (err) reject(err);
                    resolve();
                });
                resolve();
            }
        });
    });
};


CheckFile('./assets')
    .then(() => console.log("assets file gelöscht"))
    .catch(err => console.log(err));

CheckFile('./delete.txt')
    .then(() => console.log("delte file gelöscht"))
    .catch(err => console.log(err));



const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err);
            resolve(data.toString());
        });
    });
};

readFile('./blog1.txt',)
    .then((data) => console.log("read gelesen" + data))
    .catch(err => console.log(err));


const renameFile = (path, newPath) => {
    return new Promise((resolve, reject) => {
        fs.rename("./hello.txt", "./helloworld.txt", (err) => {
            if (err) console.log(err);
        });
    });
};

renameFile('./hello.txt', "./helloworld.txt")
    .then(() => console.log("Hello umbenannt"))
    .catch(err => console.log(err));
