const router = require('express').Router()
const Device = require('../model/Devices')

router.get('/', async (req, res)=>{
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
            data: err
        })
   }
})

router.patch('/:id', async (req, res)=>{
    try{
        const updateDevice = await Device.updateOne(
            {_id: req.params.id},
            {nome: req.body.nome,
            descricao: req.body.descricao,
            imagem: req.body.imagem}
            )    
            res.json({
            success: true,
            updated: updateDevice.nModified
        })
       
    }
    catch{
        res.json({
            success: false,
            data: err
        })
    }
})

router.post('/send', (req, res)=>{
    const nome = req.body.nome
    const email = req.body.email
    const mensagem = req.body.mensagem
    require('../nodemail')(nome, email, mensagem)
        .then(response => res.json(response))
        .catch(error => res.json(error))
})

router.post('/', async (req, res)=>{
    const novoDevice = new Device({
        nome: req.body.nome,
        email: req.body.email,
        descricao: req.body.descricao,
        imagem: req.body.imagem
        // kwh: req.body.kwh,
        // corrente: req.body.corrente,
        // voltagem: req.body.voltagem,
        // fp: req.body.fp
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
            {$push: {medidas: req.body.medidas}}
        )
        res.json({
            success: true,
            updated: updateDeviceId.nModified
        })

    }
    catch{
        res.json({
            success: false,
            data: err
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