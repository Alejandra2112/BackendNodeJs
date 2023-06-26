const {Schema, model} = require ('mongoose');

const RolSchema = Schema({
    nombreRol:{
        type: String,
        required: [true, 'El rol es obligatorio'],
        enum: ['Administrador', 'Vigilante', 'Residente'],
        validate: {
            validator: (value)=>{
                const ExpresionNombre = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;
                return ExpresionNombre.test(value);
            }, 
        },  
       
    },
    descripcionRol: {
        type: String,
        required: [true, 'La descripción es obligatorio'],
        validate: {
            validator: (value) => {
                const ExpresionDescripcion = /^[\s\S]*$/;
                return ExpresionDescripcion.test(value);
            }
        }
    },
    permisos:{
        type: Array,
        required:[true, 'Debes seleccionar al menos un permiso']
    },
    estado: {
        type: Boolean,
        default: true,
        required: [true, 'El estado es obligatorio']
      }

})

module.exports = model('Roles', RolSchema)