const DATABASE_MONGO = process.env.DATABASE_MONGO

const mongoose = require('mongoose')

const connect = async() => {
    try {
        await mongoose.connect(DATABASE_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Banco de Dados conectado com sucesso !')
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    connect
}