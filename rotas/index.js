const router = require('express').Router()
require('./mongoDB/mongoCom')

const devices = require('./devices')
router.use('/devices', devices)

router.get('/', (req,res)=>{
    res.json({
        success: false,
        message: "Este é um acesso reservado"
    })
    
})




module.exports = router