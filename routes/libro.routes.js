const express = require('express');
const libroRouter = express.Router();
const createError = require('http-errors');

//declaramos un objeto de nuestro modelo
let libro = require('../models/Libro');

//agregar un nuevo libro
libroRouter.route('/agregar').post((req,res)=>{
    libro.create(req.body)
    .then((data)=>{
        console.log('Se insertó un documento');
        res.send(data);
    })
    .catch((error) => {
        console.log(error);
    })
})

//obtener todos los libros
libroRouter.route('/libros').get((req,res) => {
    libro.find()
    .then((data) => {
        res.send(data);
    })
    .catch((error) => {
        console.error(error);
    })
})

//obtenemos un solo libro por su id
libroRouter.route('/libro/:id').get((req,res) => {
    libro.findById(req.params.id)
    .then((data) => {
        res.send(data);
    })
    .catch((error) => {
        console.error(error);
    })
})

//actualizar un libro
libroRouter.route('/actualizar/:id').put((req,res)=>{
    libro.findByIdAndUpdate(req.params.id,{
        $set: req.body
    })
    .then((data) => {
        console.log('Se actualizó el documento');
        res.send(data);
    })
    .catch((error) => {
        console.error(error);
    })
})

//eliminar un libro
libroRouter.route('/eliminar/:id').delete((req,res)=>{
    libro.findByIdAndDelete(req.params.id)
    .then((data) => {
        console.log('Se eliminó correctamente')
        res.send(data)
    })
    .catch((error) => {
        console.error(error)
    })
})

module.exports = libroRouter;
