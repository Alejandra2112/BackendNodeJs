const express = require('express')//Importa el modulo para crear aplicaciones web

const db_conection = require('../DATABASE/config')

class server {

    constructor () {
        
        this.app = express()
        this.port = process.env.PORT
        this.productoPath = '/api/producto'
        this.middlewares()
        this.routes()
        this.db_conectar()

    }

    middlewares () { 

        this.app.use(express.static('PUBLIC'))   
    
    }

    routes() {

        // this.app.use(this.productoPath, require('../ROUTES/productos'))

    }

    async db_conectar() {

        await db_conection()

    }

    listen () {

        this.app.listen(this.port, () => {

            console.log(`Escuchando por el puerto ${this.port}`)

        })

    }
}

module.exports = server