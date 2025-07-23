const palapaModel=require('../models/palapaModel')

function buscartodo(req, res){
  palapaModel.find({})
  .then(bebidas=>{
    
    if (bebidas.length){
        return res.status(200).send({bebidas})
    }
    return res.status(204).send({mensaje:"No hay nada que mostar"})

  })
  .catch(e =>{return res.status(404).send({mensaje:`error al solicitar la informacion ${e}` })})
}
function agregar(req,res){
  //console.log(req.body)
  new palapaModel(req.body).save()
  .then(info=>{
    return res.status(200).send({mensaje:"la informacion se guardo con exito",
      info
    })
  })
  .catch(e=>{
    return res.status(404).send({
      mensaje:`error al guardar el mensaje ${e}`
    })
  })
}
function buscarbebida(req,res, next){
  if(!req.body) req.body={}
  let consulta ={}
  consulta[req.params.key]=req.params.value//propiedad y atributos
  console.log(consulta)
  palapaModel.find(consulta)
  .then(bebidas=>{
    if(!bebidas.length)return next()
      req.body.bebidas=bebidas
    return next()
  })
  .catch (e=>{
    req.body.e =e
    return next()
  })
}

function mostrarbebida(req,res){
  if(req.body.e) return res.status(404).send({mensaje:"error al consultar la informacion"})
    if(!req.body.bebidas) return res.status(204).send({mensaje:"no hay informacion que mostrar"})
      let bebidas=req.body.bebidas
    return res.status(200).send({bebidas})
}
function eliminarbebida(req,res){
  var bebidas = {}
  bebidas = req.body.bebidas
  palapaModel.deleteOne(bebidas[0])
  .then(inf =>{
    return res.status(200).send ({mensaje:"bebida eliminada"})
  })
  .catch(e=>{
    return res.status(404).send ({mensaje:"error al eliminar a bebida ",e})
  })
}

function actualizarbebida(req,res){
  var bebidas = {}
  bebidas = req.body.bebidas
  palapaModel.updateOne(bebidas[0])
    .then(inf => {
      return res.status(200).send({ mensaje: "Bebida actualizada correctamente" });
    })
    .catch(e => {
      return res.status(404).send({ mensaje: "Error al actualizar la bebida", error: e });
    });
}
module.exports={
  buscartodo,
  agregar,
  buscarbebida,
  mostrarbebida,
  eliminarbebida,
  actualizarbebida
}