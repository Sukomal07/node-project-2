const mongoose = require('mongoose')

const services = mongoose.Schema({
    icon:String,
    title:String,
    description:String,
    linkText:String,
    link:String
})

module.exports = mongoose.model("services" , services)