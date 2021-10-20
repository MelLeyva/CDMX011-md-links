const getRoute = require('./Lib/type-route.js')
const mdFiles =require('./Lib/md-files.js')
const showLinks = require('./Lib/links.js')


const route = process.argv[2]
const fileMd = process.argv[3]



const routes = getRoute.typeRoute(route)
const filesTypeMd = mdFiles.getFiles(routes)
const links = showLinks.getLinks(filesTypeMd, fileMd) 


console.log(links)


