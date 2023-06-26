const {response} = require ('express')
const Vigilante = require ('../MODELS/vigilantes')

const getVigilante = async (req, res = response) => {
    let mensaje = ''
    try{
        const vigilantes = await Vigilante.find()
        mensaje = vigilantes
    }catch(err){
        mensaje = err
    }
    res.json({
        vigilantes:mensaje
    })
}

const postVigilante = async (req, res = response ) => {
    let mensaje = ''
    const body = req.body
    const vigilantes = new Vigilante( body)
    try{
        await vigilantes.save()
        mensaje = 'Vigilante Registrado Exitosamente'
    }catch(err){
        mensaje = err.message
    }
    res.json({
        vigilantes: mensaje
    })
}

const putVigilante = async (req, res) => {
    let mensaje = ''
    const body = req.body
    try{
        if(body.tipodemodificacion == 'Unitaria'){
            await Vigilante.findOneAndUpdate({_id:body._id}, {tipo_documento: body.tipo_documento,documento: body.documento, nombre: body.nombre,
            apellido: body.apellido, correo: body.correo, telefono: body.telefono,fechaNacimiento: body.fechaNacimiento})
            mensaje = 'Vigilante modificado exitosamente.'
        }else{
            await Vigilante.updateMany({_id:body._id},{tipo_documento: body.tipo_documento, documento: body.documento, nombre:body.nombre, apellido: body.apellido, 
            correo: body.correo, telefono: body.telefono,fechaNacimiento: body.fechaNacimiento, estado: body.estado} )
            mensaje = 'Vigilante modificado exitosamente.'
        }
    }catch(e){
        mensaje = e
    }
    res.json({
        vigilantes: mensaje
    })
}

const deleteVigilante = async (req, res) => {
    let mensaje = ''
    const body = req.body
    try{
        await Vigilante.findOneAndDelete({_id: body._id})
        mensaje = 'Eliminado Exitosamente'

    }catch(e){
        mensaje = e
    }
    res.json({
        vigilantes: mensaje
    })
}

module.exports ={
    deleteVigilante,
    getVigilante,
    postVigilante,
    putVigilante
}