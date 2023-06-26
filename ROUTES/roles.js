const {Router} = require ('express')
const route = Router()
const {getRoles, deleteRoles,postRoles, putRoles} = require ('../CONTROLLERS/roles')

route.get('/roles', getRoles)
route.post('/roles', postRoles)
route.put('/roles', putRoles)
route.delete('/roles', deleteRoles)

module.exports = route  