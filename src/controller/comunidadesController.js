const ComunidadesModel = require('../models/comunidadesModel')
const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken')

const NewComunidade = async (req, res) => {

    try {

        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).send('Você precisa de autorização')
        }
        const token = authHeader.split(' ')[1]

        //console.log(`Meu header ${token} `)
        await jwt.verify(token, SECRET, async function (error) {

        if (authHeader==token) { 
            return res.status(200).send('Acesso permitido')
        }

        const { CEP, estado, cidade, rua, bairro } = req.body
    
        const newComunidade = new ComunidadesModel ({
            CEP, estado, cidade, rua, bairro
        })
    
        const savedComunidade = await newComunidade.save()
    
        res.status(201).json(savedComunidade)
    })
       
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const findAllComunidades = async (req, res) => {
    try {
        
        const allComunidades = await ComunidadesModel.find()
        res.status(200).json(allComunidades)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const findComunidadetById = async (req, res) => {
    try {
        const findComunidade = await ComunidadesModel.findById(req.params.id)
        res.status(200).json(findComunidade)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}


const updateComunidade = async (req, res) => {
    try {

        const authHeader = req.get('authorization')

        if (! authHeader) {
            return res.status(401).send('Você precisa de autorização')
        }

        const token = authHeader.split(' ')[1]
        await jwt.verify(token, SECRET, async function (error) {

            if (authHeader == token) {
                return res.status(200).send('Acesso permitido')
            }
            const { CEP, estado, cidade, rua, bairro } = req.body
            const updatedComunidade = await ComunidadesModel.findByIdAndUpdate(req.params.id, { CEP, estado, cidade, rua, bairro
            })
            res.status(200).json(updatedComunidade)
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const deleteComunidade = async (req, res) => {
    try {

        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).send('Você precisa de autorização para fazer isso.')
        }

        const token = authHeader.split(' ')[1]
        await jwt.verify(token, SECRET, async function (error) {

            if (authHeader == token) {
                
                return res.status(200).send('Acesso permitido.')

            }

            const { id } = req.params
            await ComunidadesModel.findByIdAndDelete(req.params.id)
            const message = `A comunidade com o id: ${id}  foi deletada com sucesso.`
            
           return res.status(200).json({ message })
        
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    NewComunidade,
    findAllComunidades,
    findComunidadetById,
    updateComunidade,
    deleteComunidade
}
