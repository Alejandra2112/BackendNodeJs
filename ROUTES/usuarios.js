const {Router} = require ('express')
const route = Router()
const { getUsuario, postUsuario, putUsuario, deleteUsuario} = require ('../CONTROLLERS/usuarios')

route.get('/usuarios', getUsuario)
route.post('/usuarios', postUsuario)
route.put('/usuarios', putUsuario)
route.delete('/usuarios', deleteUsuario)

module.exports = route