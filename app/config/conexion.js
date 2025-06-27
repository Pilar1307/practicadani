const mongoose = require('mongoose')//hacer agil el proceso de conexión
const CONFIG = require('./configuracion')//importar cadena de conexion 
module.exports={
    connection : null,// cuando entre este archivo estara nulo
    connect : ()=>{//
        if(this.connection)return this,this.connection
        return mongoose.connect(CONFIG.DB)
        .then(conn =>{ //respuesta
            this.connection = conn
            console.log('realizo conexion a la base de datos')
        })
        .catch(e => console.log('error en la conexion', e))
    
    }
}