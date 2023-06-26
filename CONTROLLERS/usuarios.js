const {response} = require('express');
const Usuario = require ('../MODELS/usuarios')

const getUsuario = async(req, res=response) => {
    let mensaje = ''
    try {
        const usuario = await Usuario.find()
        mensaje = usuario
    } catch (error) {
        mensaje = error
    }

  
    res.json({
        usuario: mensaje
    })
}

const postUsuario = async(req, res ) =>{ 
    const body = req.body
    let mensaje = ''
    const usuario = new Usuario(body)
    console.log(body)
    try {
        await usuario.save()
        mensaje = 'Usuario registrado exitosamente'
    } catch (error) {
        mensaje = error
    }

    res.json({
        usuario: mensaje
    })
   
}

const putUsuario = async(req, res = response) =>{
      const body = req.body
    
    let mensaje = ''

    try {
        if(body.tipoModificacion == 'Unitaria'){
            await Usuario.findOneAndUpdate({_id:body._id}, {documento: body.documento, tipo_documento: body.tipo_documento, nombre: body.nombre,
                apellido: body.apellido,  telefono: body.telefono, rol: body.rol, estado: body.estado, correo:body.correo})
            mensaje = 'Usuario modificado exitosamente.'
        }
        else{
            await Usuario.updateMany({_id:body._id}, {tipo_documento: body.tipo_documento,password:body.password, nombre: body.nombre,
                apellido: body.apellido,  telefono: body.telefono, rol: body.rol, documento:body.documento, estado: body.estado, correo:body.correo})
            mensaje = 'Usuario modificado exitosamente.'
        }


    } catch (error) {
        mensaje = error
    }
    res.json({
        usuario: mensaje
    })
   
}


const deleteUsuario = async(req, res = response) =>{
    //Actualización de datos
    const body = req.body //Desestructuración
    let mensaje = ''

    try {
        await Usuario.findOneAndDelete({_id: body._id})
        mensaje = 'Eliminado exitosamente'
    } catch (error) {
        mensaje = error
    }
    res.json({
        roles: mensaje
    })
   
}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}
