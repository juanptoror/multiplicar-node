//Requireds normalmente en el inicio

//const fs = require('express');
//const fs = require('.7fs'); archivos propios
const { crearArchivo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]

let comando = argv._[0];

switch (comando) {
    case 'listar':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado'));
        break;
    default:
        console.log('Comando no reconocido');
}