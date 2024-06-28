const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Libro = new Schema({
    nombre: {
        type: String
    },
    autor: {
        type: String
    },
    genero: {
        type: String
    },
    fecha: {
        type: Date
    }
},
{
    collection: 'libros'
})

module.exports = mongoose.model('Libro', Libro)