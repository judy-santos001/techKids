const mongoose = require('mongoose')

const voluntariosSchema = new mongoose.Schema(
    {
    _id :{ type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId},
    nome: { type: String, required: true },
    contato: { type: Number, required:true},
    email: { type: String , required:true},
    senha: { type: String, required: true },
    vagasDisponiveis: { type: Boolean },
    areaDeAtuação: { type: [String], required: true },
    diasDaSemana: { type: [String] , required:true},
    horario: { type: [String], required: true},
    createdAt: {
        type: Date,
        default: new Date()
    }
    
},

{
    versionKey: false
})

const voluntarios = mongoose.model('voluntarios', voluntariosSchema);

module.exports = voluntarios;

