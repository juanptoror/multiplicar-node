const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {
    for (let i = 1; i < 11; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`.green);
    }
}


//Opcion 1

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero'.red);
            return;
        }

        let data = '';

        for (let i = 1; i < 11; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });

    })
}

module.exports = {
    crearArchivo
}


//Opcion 2

module.exports.crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        let data = '';

        for (let i = 1; i < limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });

    })
}