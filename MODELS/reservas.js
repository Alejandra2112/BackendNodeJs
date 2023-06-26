const {Schema, model} = require ('mongoose');

const ReservaSchema = Schema({
    tipoEspacio :{
        type: String,
        required: [true, 'El tipo de espacio es obligatorio'],
        enum: ['Zona humeda', 'Salon Social', 'Parqueadero']
    },
    espacio: {
        type: String,
        required: [true, 'El espacio es obligatorio'],
        enum: ['Piscina', 'Sauna','Salon Social', 'Parqueadero']
    },
    propietario:{
        type: String,
        required:[true, 'El nombre de propietario es obligatorio'],
        validate:{
            validator: (value)=>{
                const ExpresionPropietario =  /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;
                return ExpresionPropietario.test(value);
            }
        }
    },
    fecha: {
        type: Date,
        default: Date.now()
    },
    fechaFinal: {
        type: Date,
        required: [true, 'La fecha final es obligatoria'],
        validate: {
          validator: function (value) {
            const fechaActual = new Date();
            return value >= fechaActual;
          }
        }
      },      
    vehiculo : {
        type: String,
        // validate: {
        //     validator: (value)=>{
        //         const ExpresionVehiculo =  /^[a-zA-Z0-9]+$/
        //         return ExpresionVehiculo.test(value)
        //     }
        // }
    },
    parqueadero: {
        type: String ,
        // validate: {
        //     validator: (value)=>{
        //         const Expresionparqueadero =  /^[a-zA-Z0-9]+$/
        //         return Expresionparqueadero.test(value)
        //     }
        // }
        
    },
    capacidad: {
        type:Number,
        // validate: {
        //     validator: (value)=>{
        //         const Expresioncapacidad =  /^[0-9]+$/
        //         return Expresioncapacidad.test(value)
        //     }
        // }
    }
      

})

module.exports = model('Reservas', ReservaSchema)