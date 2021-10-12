const path = require('path');
const rout = process.argv[2]

const typeRoute = path.isAbsolute(rout)

if (typeRoute === false ){
   const newPath =  path.resolve(rout)
   console.log(newPath)
} else {
    console.log(typeRoute)
}