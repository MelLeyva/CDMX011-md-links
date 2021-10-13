const path = require('path');

function typeRoute (route) {
    const isAbsolute = path.isAbsolute(route)
    if (isAbsolute === false ){
       const changeRoute =  path.resolve(route)
       return changeRoute
    } else {
        return route
    }
}

module.exports.typeRoute = typeRoute