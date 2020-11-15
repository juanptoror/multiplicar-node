const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('crear', 'imprime en consola la tabla de multi', opts)
    .help()
    .argv;

module.exports = {
    argv
}