const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONNECT, ()=>{
    console.log('Conectado!')
    
})