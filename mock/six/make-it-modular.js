const myModule = require('./mymodule.js');

const directory = process.argv[2];
const extension = process.argv[3];


myModule(directory, extension, (err, filterExt) => {
    if (err) {
        return console.log(`this is${error}`)
    }
    filterExt.forEach(file => {
        console.log(file)
    });
})