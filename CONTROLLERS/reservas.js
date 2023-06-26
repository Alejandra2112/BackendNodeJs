const {response} = require('express');
const Reservas = require('../MODELS/reservas')

const getReservas = async (req, res = response) =>{
    let mensaje = ''
    try{
        const reservas = await Reservas.find()
        mensaje = reservas
    }catch(e){
        mensaje = e
    }
    res.json({
        reservas : mensaje
    })
}

const postReservas = async (req, res = response) =>{
    let mensaje = ''
    const body = req.body
    const reservas = new Reservas(body)
    console.log(body)
    try{
        await reservas.save()
        mensaje = 'Reserva Registrada Exitosamente'
    }catch(e){
        mensaje = e
    }
    res.json({
        reservas: mensaje
    })
}



const putReservas = async (req, res) => {
    let mensaje = ''
    const body = req.body
    try{
        if (body.tipoModificacion == 'Unitaria'){
            await Reservas.findOneAndUpdate({_id:body._id}, {tipoEspacio: body.tipoEspacio, espacio: body.espacio, propietario: body.propietario, fechaFinal: body.fechaFinal, vehiculo: body.vehiculo, parqueadero: body.parqueadero, capacidad: body.capacidad})
            mensaje = 'Reserva modificada exitosamente.'
        }else{
            await Reservas.updateMany({_id:body._id}, {tipoEspacio: body.tipoEspacio, espacio: body.espacio, propietario: body.propietario, fechaFinal: body.fechaFinal, vehiculo: body.vehiculo, parqueadero: body.parqueadero, capacidad: body.capacidad})
            mensaje = 'Reserva modificada exitosamente.'
        }

    }catch(e){
        mensaje = e
    }
    res.json({
        reservas: mensaje
      });
}


const deleteReservas = async(req, res) => {
    let mensaje = ''
    const body = req.body
    try{
        await Reservas.findOneAndDelete({_id: body._id})
        mensaje = 'Eliminado Exitosamente'
    }catch(e){
        mensaje = e
    }
    res.json({
        reservas: mensaje
    })
}

module.exports = {
    getReservas,
    postReservas,
    putReservas,
    deleteReservas
}