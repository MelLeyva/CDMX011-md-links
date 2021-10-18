const getRoute = require('./Lib/type-route.js')
const showFiles =require('./Lib/show-content.js')

const route = process.argv[2]



const routes = getRoute.typeRoute(route)
const show = showFiles.getFiles(routes)

console.log(show)


