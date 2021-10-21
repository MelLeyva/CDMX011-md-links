const getRoute = require('./Lib/type-route.js')
const mdFiles =require('./Lib/md-files.js')
const showLinks = require('./Lib/links.js')


const route = process.argv[2]

const routes = getRoute.typeRoute(route)
const filesTypeMd = mdFiles.getFiles(routes)
const links = showLinks.getLinks(filesTypeMd) 


console.log(links)


