const getRoute = require('./Lib/type-route.js')
const mdFiles =require('./Lib/md-files.js')
const showLinks = require('./Lib/links.js')
const http = require('./Lib/validate-links.js')

const route = process.argv[2]

const routes = getRoute.typeRoute(route)
const filesTypeMd = mdFiles.getFiles(routes)
const links = showLinks.getLinks(filesTypeMd) 

http.validate(links)
.then(resolve =>{
    console.log(resolve)
})
.catch(err => {
    console.log(err)
})
.finally(() => console.log('All youre files have been checked!'))







