const express = require('express');
const app = express(); //Contiene nuestra app - Hace el instanciamiento de express
const port = 5001; //Puerto por donde corre mi app

//Cuando mi app sea llamada por get y ruta raiz "/" ejecuta la función
app.get('/', (req, res) => { //Se le pasa una función anónima o lambda a la cual se le pasan argumentos de peticion y respuesta
    res.send({data:"hola mundo"});
})

//Corra la app por el puerto 5001 y llama a la función anónima que muestra un mensaje
app.listen(port, () =>{
    console.log('app está en línea')
})