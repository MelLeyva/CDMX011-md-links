const chalk = require('chalk')
const fliget = require('figlet')


const cli = ()=>{
    console.log(chalk.bgCyan(fliget.textSync('MD-LINKS', {
        font: 'doom',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        whitespaceBreak: true,
    })))
}

module.exports.cli = cli