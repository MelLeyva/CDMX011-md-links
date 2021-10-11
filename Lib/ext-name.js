const extpath = require('path')

extFile = extpath.extname(process.argv[2]);

console.log(extFile)