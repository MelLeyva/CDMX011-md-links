const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);
// const buffer = fs.readFileSync('gym9.txt');
const result = buffer.toString().split('\n').length -1;
// console.log(buffer.toString())
console.log(result)