const ComunidadesModel = require('../models/comunidadesModel')



const NewComunidade = async (req, res) => {

    try {

        const { CEP, estado, cidade, rua, bairro } = req.body
    
        const newComunidade = new ComunidadesModel ({
            CEP, estado, cidade, rua, bairro
        })
    
        const savedComunidade = await newComunidade.save()
    
        res.status(201).json(savedComunidade)
    
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
        const { CEP, estado, cidade, rua, bairro } = req.body
        const updatedComunidade = await ComunidadesModel.findByIdAndUpdate(req.params.id, { CEP, estado, cidade, rua, bairro
        })
        const comunidadeUpdate = await ComunidadesModel.findByIdAndUpdate(req.params.id)
          return  res.status(200).json(comunidadeUpdate)

    } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
    }
}

const deleteComunidade = async (req, res) => {
    try {


        const { id } = req.params
         await ComunidadesModel.findByIdAndDelete(req.params.id)
        const message = `A comunidade com o id: ${id}  foi deletada com sucesso.`
            
        return res.status(200).json({ message })
        
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
