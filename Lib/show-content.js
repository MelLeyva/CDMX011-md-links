const fs = require('fs');
const extpath = require('path')

let allFiles = []
function getFiles (routes){
    let fileOrDir = fs.statSync(routes)
    if(fileOrDir.isDirectory() === true){
        const dirFiles = fs.readdirSync(routes)
            dirFiles.forEach(file =>{
            let eachFile = extpath.join(routes, file)
            getFiles(eachFile)
        })
    } 
    else{
        if (fileOrDir.isFile() === true){
            if (extpath.extname(routes) === '.md')
            allFiles.push(routes);
        }
    }
return allFiles 
}

module.exports.getFiles = getFiles
