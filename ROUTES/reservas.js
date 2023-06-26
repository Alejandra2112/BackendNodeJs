const {Router} = require ('express')
const route = Router()
const {getReservas,postReservas, putReservas, deleteReservas} = require ('../CONTROLLERS/reservas')

route.get('/reservas', getReservas)
route.post('/reservas', postReservas)
route.put('/reservas', putReservas)
route.delete('/reservas', deleteReservas)

module.exports = route  