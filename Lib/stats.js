/* const prueba = [
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: 'C:\\Users\\Laboratoria\\Desktop\\LABORATORIA\\CDMX011-md-links\\mocksito\\capa 2\\README-mdlinks.markdown',
      status: 200,
      statusText: 'OK'
    },
    {
      href: 'https://create.kahoot.it/share/session-4-gym/966aea9b-079e-4515-b8fe-61eaf5e9d9cc',
      text: 'https://create.kahoot.it/share/session-4-gym/966aea9b-079e-4515-b8fe-61eaf5e9d9cc',
      file: 'C:\\Users\\Laboratoria\\Desktop\\LABORATORIA\\CDMX011-md-links\\mocksito\\README-4.md',
      status: 200,
      statusText: 'OK'
    }
  ] */

function stats(validation){
    return new Promise((resolve, reject) => {
        let stadistics = {}
        const total = [];
        const broken = [];
        const online = [];
        
        validation.map(element => {
            total.push(element.href) 
            if(element.status === 200 ){
                online.push(element)
            }   else if (element.status >= 400){
                broken.push(element)
            }
        })
        stadistics = {
            total: total.length,
            online: online.length,
            broken: broken.length
        }
        //console.log(stadistics)
        resolve(stadistics)
        reject(err)
    })
}

module.exports.stats = stats
