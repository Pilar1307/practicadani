const express = require('express');
const app = express();
const routerpalapa= require('./routes/palapaRouter')
app.use(express.urlencoded({extended:false}))
app.use(express.json)

app.use('/palapa',routerpalapa)

module.exports=app