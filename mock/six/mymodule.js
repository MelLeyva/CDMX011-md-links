const fs = require('fs');
const path = require('path');

const array = []
function extFiles (directory, ext, callback) {
    const extension = `.${ext}`;
    fs.readdir( directory, (err, list) => {
        if (err){
             return callback(err);
        }
        const filterExt = list.filter(file =>{
            if (path.extname(file) === extension) {
                array.push(file)
                return array
            }
        })
        return callback(null, filterExt);
    });
};
module.exports = extFiles
