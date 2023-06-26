const {response} = require('express');
const Roles = require('../MODELS/roles')

const getRoles = async (req, res = response) =>{
    let mensaje = ''
    try{
        const roles = await Roles.find()
        mensaje = roles
    }catch(e){
        mensaje = e
    }
    res.json({
        roles : mensaje
    })
}

const postRoles = async (req, res = response) =>{
    let mensaje = ''
    const body = req.body
    const roles = new Roles(body)
    console.log(body)
    try{
        await roles.save()
        mensaje = 'Rol Registrado Exitosamente'
    }catch(e){
        mensaje = e
    }
    res.json({
        roles: mensaje
    })
}



const putRoles = async (req, res) => {
    let mensaje = ''
    const body = req.body
    try{
        if (body.tipoModificacion == 'Unitaria'){
            await Roles.findOneAndUpdate({_id:body._id}, {descripcionRol: body.descripcionRol, permisos: body.permisos, estado: body.estado, nombreRol: body.nombreRol})
            mensaje = 'Rol modificado exitosamente.'
        }else{
            await Roles.updateMany({_id:body._id}, {descripcionRol: body.descripcionRol, permisos: body.permisos, nombreRol: body.nombreRol})
            mensaje = 'Rol modificado exitosamente.'
        }

    }catch(e){
        mensaje = e
    }
    res.json({
        roles: mensaje
      });
}


const deleteRoles = async(req, res) => {
    let mensaje = ''
    const body = req.body
    try{
        await Roles.findOneAndDelete({_id: body._id})
        mensaje = 'Eliminado Exitosamente'
    }catch(e){
        mensaje = e
    }
    res.json({
        roles: mensaje
    })
}

module.exports = {
    deleteRoles,
    postRoles,
    putRoles,
    getRoles
}