const app = require ('./app/app')
const config = require('./app/config/configuracion')
const conexion = require('./app/config/conexion')

conexion.connect()

app.listen(config.port,()=>{
    console.log(`aplicacion corriendo por el puerto ${config.port}`);
})