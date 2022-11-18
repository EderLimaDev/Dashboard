const mongoose = require('mongoose')

mongoose.connect(process.env.PORT || 3001, '0.0.0.0', ()=>{
    console.log('Conectado!')

})