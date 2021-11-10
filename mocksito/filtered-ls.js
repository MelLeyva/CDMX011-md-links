const fs = require('fs');
const path = require('path');

const directory = process.argv[2];
const extension = `.${process.argv[3]}`;
const files = []
fs.readdir(directory, (err, list) =>{
    if (err) {
        console.log(`this is${error}`)
    }
    list.forEach(file => {
        if (path.extname(file) === extension) {
            files.push(file)
        }
    })
    console.log(files)
})
