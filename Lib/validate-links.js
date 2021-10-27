const fetch = require('node-fetch');

function validate(array){
    return new Promise((resolve, reject) => {
let enlaces = array.map(url => {
return fetch(url.href)
    .then(res =>{ 
        url.status= res.status
        url['statusText'] = res.statusText
        // console.log(url)
    })
    .catch(err => {
        //url['status'] = err.status
        //url['statusText'] = err.statusText
        // console.log(url)
})
//console.log(enlaces)
})
 Promise.all(enlaces)
 .then(() => resolve(array))
 .catch(() => {
     reject(new Error('sin resultados'))
    })
 
    })
}

module.exports.validate = validate

 /*let requests = array.map( url => fetch(url.href))
    console.log(requests)
    Promise.all(requests)
    .then(responses => responses.forEach(
        res => {
            console.log({status:res.status, ok:res.ok})
        }
    ))
    .catch(err => {
        return {status:err.status, ok:err.ok}
    })
         {fetch(url.href)
            .then (res => {
                const httpReq = {status:res.status, ok:res.ok}
               return httpReq
            })
            .catch(err => {
                return {status:err.status, ok:err.ok}
            }) 
        })
        return newArray */