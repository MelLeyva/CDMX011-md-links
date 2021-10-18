const getRoute = require('./Lib/type-route.js')
const mdFiles =require('./Lib/md-files.js')
const showLinks = require('./Lib/links.js')

const route = process.argv[2]



const routes = getRoute.typeRoute(route)
const mdFiles = mdFiles.getFiles(routes)
const links = showLinks.getLinks(mdFiles) 

console.log(show)


