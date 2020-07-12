const argv = require('yargs')
    .options({
        ipDns: {
            alias: 'i',
            desc: 'Ip o Dns para optener localizacion de pais y luego el clima',
            demand: true
        }
    })
    .help()
    .argv


module.exports = {
    argv
}