const { Schema, model } = require('mongoose')

const vigilanteSchema = Schema({
    tipo_documento:{
        type: String,
        enum :['CC', 'CE'],
        required : [true, 'El tipo de documeto es obligatorio']
    },
    documento:{
        type: Number,
        required: [true, 'El documento es obligatorio'],
        validate: {
            validator: (value)=>{
                const ExpresionDocumento = /^[0-9]{8,10}$/;
                return ExpresionDocumento.test(value)
            }
        }
    },
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio'],
        validate:{
            validator: value => {
                const ExpresionNombre = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/
                return ExpresionNombre.test(value)
            },
        }
    }, 
    apellido:{
        type: String,
        required: [true, 'El apellido es obligatorio'],
        validate:{
            validator: value => {
                const ExpresionApellido = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/
                return ExpresionApellido.test(value)
            },
        },
    },
    correo:{
        type: String,
        required:[true, 'El correo es obligatorio'],
        validate:{
            validator: value => {
                const ExpresionCorreo = /^([a-zA-Z0-9]+)\@[a-zA-Z]+\.[a-zA-Z]+$/;
                return ExpresionCorreo.test(value)
            },
        },
    },
   
    telefono:{
        type:Number,
        validate: {
            validator: (value)=>{
                const ExpresionTelefono = /^[0-9]{10}$/
                return ExpresionTelefono.test(value)
            }
        }
    },
    fechaNacimiento: {
        type: Date,
        required:[true, 'La fecha de nacimiento es obligatorio'],
        validate: {
            validator: function (fechaNacimiento) {
              const fechaActual = new Date();
              const edadMinima = new Date(fechaActual.getFullYear() - 18, fechaActual.getMonth(), fechaActual.getDate());
              return fechaNacimiento <= edadMinima;
            }
        }
    },

    estado: {
        type: Boolean,
        default: true,
        required: [true, 'El estado es obigatorio']
    }
})

module.exports = model ('Vigilante', vigilanteSchema)