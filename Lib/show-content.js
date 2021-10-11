const fs = require('fs');

filesNames = fs.readdirSync(process.argv[2]);

console.log(filesNames);