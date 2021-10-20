const fs = require('fs');
const marked = require("marked");
// const extpath = require('path')

function getLinks (allFiles, file ){
    const readFile = fs.readFileSync(file, 'utf-8');
    const html = marked(readFile)
    /*const fileLines = readFile.split(/\r\n|\r|\n/)
    // console.log(fileLines)
    fileLines.forEach(lines => {
        let expReg = /^[.[]/gi
        let lineas = lines.match(expReg)
        if(lineas != null){
            console.log(lineas)
        }
        //console.log(lineas)
    }) */
        
        
       console.log(html)

    //return readFile

}

module.exports.getLinks = getLinks