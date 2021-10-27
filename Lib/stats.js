
function stats(array){
    return new Promise((resolve, reject) => {
    let enlaces = array.map(async url => {
    try {
        const res = await fetch(url.href);
        url.status = res.status;
        url['statusText'] = res.statusText;
    } catch (err) { 
        url['status'] = err.status
        url['statusText'] = err.statusText
    }
    })
    Promise.all(enlaces)
    .then(() => resolve(array))
    .catch(() => {
        reject(new Error('sin resultados'))
        })
    })
}

module.exports.validate = validate

http.validate(links)
.then(resolve =>{
    console.log(resolve)
})
.catch(err => {
    console.log(err)
})