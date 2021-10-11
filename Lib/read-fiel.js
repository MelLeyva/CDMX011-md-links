const fs = require('fs');

readFile = fs.readFileSync(process.argv[2]);

result = readFile.toString();

console.log(result)