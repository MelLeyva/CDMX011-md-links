const fs = require('fs');
const extpath = require('path')

let allFiles = []
function getFiles (route){
    let fileOrDir = fs.statSync(route)
    if(fileOrDir.isDirectory() === true){
        const dirFiles = fs.readdirSync(route)
            dirFiles.forEach(file =>{
            let eachFile = extpath.join(route, file)
            getFiles(eachFile)
        })
    } 
    else{
        if (fileOrDir.isFile() === true){
           if (extpath.extname(route) === '.md' || extpath.extname(route) === '.markdown' || extpath.extname(route) === '.mdown' )
            allFiles.push(route)
        }
    }
 return allFiles
}

module.exports.getFiles = getFiles
