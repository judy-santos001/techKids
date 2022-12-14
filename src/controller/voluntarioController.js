const Voluntarios = require('../models/voluntariosModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const create = (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
    req.body.senha = senhaComHash
    const voluntario = new Voluntarios(req.body)

    voluntario.save(function(err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }

        res.status(201).send(voluntario)
    })
}

const getAll = (req, res) => {
    Voluntarios.find(function (err, voluntarios) {
        if(err) {
            res.status(500).send({ message: err.message })
        }

        res.status(200).send(voluntarios)
    })
}
const updateVoluntario = async (req, res) => {
    try {

         const {nome,
        contato,
        vagasDisponiveis,
        prestaçãoDeServiço,
         diasDaSemana,
         email,
         senha } = req.body
        const updatedVoluntario = await Voluntarios.findByIdAndUpdate(req.params.id, {
         nome, contato,  vagasDisponiveis, diasDaSemana, email, senha, prestaçãoDeServiço
        })
        const voluntarioUpdate =await Voluntarios.findByIdAndUpdate(req.params.id)
            res.status(200).json(voluntarioUpdate)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const deleteVoluntarioById = async (req, res) => {
    try {
        const { id } = req.params
        await Voluntarios.findByIdAndDelete(id)
        const message = `O voluntario com o id ${id} foi excluído com sucesso!`
        res.status(200).json({ message })
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const loginDoVoluntario = (req, res) => {
    Voluntarios.findOne({
         email: req.body.email }, function (error, voluntario) {
        
        if (!voluntario) {
            return res.status(404).send(`Não existe voluntario com o email ${req.body.email}`)
        }

        const senhaValida = bcrypt.compareSync(req.body.senha, voluntario.senha)

        if (!senhaValida) {

            return res.status(403).send('Senha incorreta')
        }

        const token = jwt.sign({ email: req.body.email }, SECRET)
       
        return res.status(200).send(token)
        
    })
}
module.exports = {
    create,
    getAll,
    updateVoluntario,
    deleteVoluntarioById,
    loginDoVoluntario
}