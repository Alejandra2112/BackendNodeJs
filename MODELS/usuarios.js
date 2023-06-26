const {Schema, model} = require ('mongoose')

const usuario_schema = Schema ({
    tipo_documento:{
        type: String,
        enum :['CC', 'CE']
       
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
        validate:{
            validator: value => {
                const ExpresionNombre = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/
                return ExpresionNombre.test(value)
            },
        },
        required: [true, 'El nombre es obligatorio']
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
    rol:{
        type: String,
        enum: ['Administrador', 'Vigilante', 'Residente'],
        default : 'Residente'
    }, 
    password: {
        type: String,
        required: [true, 'El password es obligatorio'],
        validate: {
            validator: (value)=>{
                const Expresionpassword =  /^[a-zA-Z0-9]{8,}$/;
                return Expresionpassword.test(value)
            }
        }
    },
    fecha: {
        type: Date,
        default: Date.now()
    },
    estado: {
        type: Boolean,
        default: true,
        required: [true, 'El estado es obligatorio']
      }
   })

module.exports = model('Usuario', usuario_schema)