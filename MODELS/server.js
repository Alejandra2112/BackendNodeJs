const express = require('express');
const cors  = require('cors');//Implementar seguridad
const bodyParser = require('body-parser')//Recibir datos de formularios html
const db_connection = require('../DATABASE/config');

class Server {
    
    constructor () {
        
        this.app = express()

        this.port = process.env.port
        
        this.usuarioPath = '/api/usuarios' 
        this.rolesPath = '/api/roles'
        this.vigilantesPath = '/api/vigilantes'
        this.reservasPath = '/api/reservas'
        
        this.middlewares()//Seguridad

        this.routes()

        this.db_connect()

    }

    middlewares() //Directorio Publico
    {
        this.app.use(express.static(__dirname + "/PUBLIC"));
        this.app.use( cors() );
        this.app.use(bodyParser.json()) // for parsing application/json

    }

    routes()
    {

        this.app.use(this.usuarioPath, require('../ROUTES/usuarios'))
        this.app.use(this.vigilantesPath, require('../ROUTES/vigilantes'))
        this.app.use(this.rolesPath, require ('../ROUTES/roles')) 
        this.app.use(this.reservasPath, require('../ROUTES/reservas'))
    }

    async db_connect(){
        await db_connection()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}

//Exportar la clase server
module.exports = Server