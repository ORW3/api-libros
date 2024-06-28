const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')

//conexion con la BD
mongoose
    //.connect('mongodb://127.0.0.1:27017/libros')
    .connect('mongodb+srv://illurito:DY15EYQ71R@owo.okkh5v0.mongodb.net/libros?retryWrites=true&w=majority&appName=Owo')
    .then((x) => {
        console.log(`Conectado exitosamente a la base de datos: ${x.connections[0].name}`)
    })
    .catch((error) => {
        console.log('Error de conexión', error.reason)
    })

//servidor web
const libroRouter = 
    require('./routes/libro.routes')
const app = express()

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
)
app.use(cors())
app.use('/api',libroRouter)

//habilitar el puerto
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
    console.log('Servidor escuchando en el puerto '+port)
})

//manejador de error 404
app.use((req, res, next) => {
    next(createError(404))
})

//manejador de errores
app.use(function(err,req,res,next){
    console.log(err.message)
    if(!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
})

