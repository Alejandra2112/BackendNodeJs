const {mongoose} = require('mongoose');

db_connection = async()=>{
    try {
        await(mongoose.connect(process.env.link_connection))
        console.log('Connected');
    } catch (error) {
         console.log(error);
    }
}


module.exports = db_connection