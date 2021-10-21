const fs = require('fs');
const marked = require("marked");
const jsdom = require("jsdom")
const { JSDOM } = jsdom

function getLinks (allFiles){
    const array=[]
    allFiles.forEach(file => { 
        const readFile = fs.readFileSync(file, 'utf-8');
        const html = marked(readFile)
        const dom = new JSDOM(html)
        // console.log(dom.window)
        const aTarget = dom.window.document.querySelectorAll("a")
        //console.log(aTarget)
        aTarget.forEach( a => {
            let enlaces = a.getAttribute('href');
            array.push(enlaces)
        
        })
    })
     return array
    
}


module.exports.getLinks = getLinks