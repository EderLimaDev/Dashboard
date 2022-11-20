const mongoose = require('mongoose')
const slug = require('slug')
const {Schema} = mongoose

const devicesSchema =  new Schema({
    nome: { type: String, required: true, unique:true},
    email: {type: String, required: true},
    slug: {type: String, required: true, unique:true, default: function(){return slug(this.nome)}},
    kwh: {type: Number, required: true},
    corrente: {type: Number, required: true},
    voltagem: {type: Number, required: true},
    fp: {type: Number, required: true},
    imagem: {type: String, required: true},
    data: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('devices', devicesSchema)