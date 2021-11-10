const fs = require('fs');
const marked = require("marked");
const jsdom = require("jsdom")
const { JSDOM } = jsdom

function getLinks (allFiles){
    let array=[]
    allFiles.forEach(file => { 
        const readFile = fs.readFileSync(file, 'utf-8');
        const html = marked(readFile)
        const dom = new JSDOM(html)
        // console.log(dom.window)
        const aTarget = dom.window.document.querySelectorAll("a")
        //console.log(Array.from(aTarget))
        aTarget.forEach( a => {
            let URL = a.getAttribute('href');
           // let URL = a.href;
            //console.log(URL)
            let title = a.textContent
            if(!URL.startsWith('#')){
            array.push({href: URL, text: title, file: file})
            }
        })
    })
    //console.log(array)
     return array
    
}

module.exports.getLinks = getLinks