const mongoose = require('mongoose')

const comunidadesSchema = mongoose.Schema(
    {
        _id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
        CEP: { type: Number, required: true },
        estado: { type: String, required: true },
        cidade: { type: String, required: true },
        rua: { type: String },
        bairro: { type: String },
        createdAt: {
            type: Date,
            default: new Date()
        }
        
        
    },
    {
        versionKey: false,
    }
)

const comunidades = mongoose.model('comunidades', comunidadesSchema)

module.exports = comunidades

