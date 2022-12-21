import fs from 'fs';

const myPromiseFunction = (YIKE) => {
    return new Promise((resolve, reject) => {
        fs.writeFileSync("./flughafen", YIKE, (err) => {
            if (err) reject(err);
            else resolve();
        });

    });


};

for (let i = 0; i < 35; i++) {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(data => data.json())
        .then(joke => {
            fs.promises.appendFile('./unserchuck', i + ". " + joke.value + "\n", (err) => console.log(err));
            myPromiseFunction(joke.value)
                .then(() => console.log("ALLES TUTTI"))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));

}


// myPromiseFunction()
//     .then(() => console.log("ALLES TUTTI"))
//     .catch(err => console.log(err))

