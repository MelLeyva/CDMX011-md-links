const fetch = require('node-fetch');

function validate(array){
    return new Promise((resolve, reject) => {
    let enlaces = array.map(async url => {
    try {
        const res = await fetch(url.href);
        if(res.status >= 200 && res.status <= 399 ){
            url.status = res.status;
            url['statusText'] = 'OK';
        } else {
            url['status'] = res.status
            url['statusText'] = 'FAIL'
        }
    } catch (err) { 
               return err 
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

/* function validate(array){
    return new Promise((resolve, reject) => {
        let enlaces = array.map(url => {
            return fetch(url.href)
            .then(res =>{ 
                url.status= res.status
                url['statusText'] = res.statusText
            // console.log(url)
            })
            .catch(err => {
            // url['status'] = err.status
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
} */