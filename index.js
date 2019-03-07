const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')
const helmet = require('helmet')
const compression = require('compression')

const dbSettings = require('./src/database/databaseSettings')
const errorHandler = require('./src/middlewares/errorHandler')
const handler404 = require('./src/middlewares/handler404')

const _PORT = process.env.PORT || 4050;

app.use(cors())

app.use(helmet())
app.disable('x-powered-by')

app.use(compression())

app.use( bodyParser.json() )
app.use(express.static('static/public'))

let api = express.Router()
require('./src/routes/router')(api)

app.use('/api', api)

app.use(errorHandler)
app.use(handler404)

app.listen(_PORT, (err)=>{
    if(err){
        console.log(`[ERROR] Could not start the application...`) 
        console.log(`[ERROR] ${err.message}`)
    }
    else console.log(`Server is running on port ${_PORT}...`)
});

const test = mysql.createConnection(dbSettings.options)

test.connect( (err)=>{
    if(err){
        console.log(`[ERROR] Could not connect to database...`) 
        console.log(`[ERROR] ${err.message}`)
    }
    else console.log(`Server connected successfully to database...`)
})
test.end()