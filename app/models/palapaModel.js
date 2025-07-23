const mongoose= require ('mongoose');

const palapaSchema = mongoose.Schema({
    nombre:{
        type:String
    },
    descripcion:{
        type:String
    },
    precio:{
        type:Number
    }, 
    capcidad:{
        type:Number
    },
    existencia:{
        type:Number,
        default:10
    }
    
})
const palapModel=mongoose.model('bebidas', palapaSchema)
module.exports=palapModel