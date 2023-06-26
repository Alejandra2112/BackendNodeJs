const {Router} = require ('express')
const route = Router()
const {getVigilante, putVigilante, postVigilante, deleteVigilante}= require ('../CONTROLLERS/vigilantes')

route.get('/vigilantes', getVigilante)
route.put('/vigilantes', putVigilante)
route.post('/vigilantes', postVigilante)
route.delete('/vigilantes', deleteVigilante)

module.exports = route