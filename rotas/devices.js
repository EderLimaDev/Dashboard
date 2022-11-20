const router = require('express').Router()
const Device = require('../model/Devices')

router.get('/:email', async (req, res)=>{
    try{
        const listaDevices = await Device.find()
        res.json({
        success: true,
        message: listaDevices
        })

    }
   catch{
        res.json({
            success: false,
            message: "Não foi possível listar os dispositivos"
        })
   }
})
router.get('/detalhes/:id', async (req, res)=>{
    try{
        const deviceId = await Device.findById({
            _id: req.params.id
        })
      res.json({
        success: true,
        message: deviceId
      })

    }
   catch{
        res.json({
            success: false,
            message: "Não foi possível listar os dispositivos"
        })
   }
})
router.post('/', async (req, res)=>{
    const novoDevice = new Device({
        nome: req.body.nome,
        email: req.body.email,
        imagem: req.body.imagem,
        kwh: req.body.kwh,
        corrente: req.body.corrente,
        voltagem: req.body.voltagem,
        fp: req.body.fp
    })
    try{
        const saveNovoDevice = await novoDevice.save()
        res.json({
            success: true,
            message: saveNovoDevice
            })
    }
    catch{
        res.json({
            success: false,
            message: "Não foi possível cadastrar o novo Dispositivo"
            })


    }
   
})

//atualizar dispositivos
router.put('/:id', async (req, res)=>{
    try{
        const updateDeviceId = await Device.updateOne(
            {_id: req.params.id},
            {kwh: req.body.kwh,
            corrente:req.body.corrente,
            voltagem:req.body.voltagem,
            fp: req.body.fp}
        )
        res.json({
            success: true,
            updated: updateDeviceId.nModified
        })

    }
    catch{
        res.json({
            success: false,
            message: "Não foi possível atualizar o Dispositivo"
        })

    }


})

//deleta um único registro com base no id
router.delete('/:id', async (req, res)=>{
    try{
        const deleteMedidasId = await Medidas.deleteOne({
            _id: req.params.id
        });
        res.json({
            success: true,
            updated: deleteMedidasId
        })

    }
    catch(err){
        res.json({
            success: false,
            data: err
        })

    }


})


module.exports = router