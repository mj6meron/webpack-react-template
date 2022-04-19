const express = require('express')
const app = express()
const PORT = process.env.PORT || 1337

// MIDDLEWARES
app.use(express.json())
app.use(express.static('dist'))

// ROUTES
//app.use('/', )



app.listen(PORT, ()=>{
    console.log('server just listning ..... ', PORT)
})