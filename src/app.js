require('dotenv-safe').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger/swagger_output.json');

const index = require('./routes/index')
const comunidadesRoutes = require('./routes/comunidadesRoutes')
const voluntariosRoutes = require('./routes/voluntariosRoutes')
const app = express()

mongoose.connect()

app.use(cors())
app.use(express.json())

app.use('/', voluntariosRoutes)
app.use('/', index)
app.use('/', comunidadesRoutes)
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app