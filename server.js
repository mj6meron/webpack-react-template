const populate = require('./InitPupulateDB')
const express = require('express')
const mongoose = require('mongoose')
const signale = require('signale')
const dotenv = require('dotenv')
const app = express()
const api = require('./routes/api')
const PORT = process.env.PORT || 1337


// MIDDLEWARES
app.use(express.json())
app.use(express.static('dist'))

// Activate Dontenv - helps us read from the .env file
dotenv.config()

//pupulate DB
//populate()

// Connect to database
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology:true, useNewUrlParser: true}, ()=>{
    signale.success('connected to the whole world wit my database')
})

// ROUTES
app.use('/api', api)






app.listen(PORT, ()=>{
    console.log('server just listning ..... ', PORT)
})