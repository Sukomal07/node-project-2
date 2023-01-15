const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const routes = require('./routes/main')
require("./db/conn")

const app = express()
const port = process.env.PORT || 8000

//middle wares
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static',express.static("public"))
app.use('',routes)

//template engine
app.set('view engine', 'hbs')
app.set("views", "views")
hbs.registerPartials("./views/partials")


//server
app.listen(port , () =>{
    console.log(`Server is running on ${port}`)
})
