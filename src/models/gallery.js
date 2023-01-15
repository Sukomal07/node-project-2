const mongoose = require('mongoose')

const gallery = mongoose.Schema({
    imgUrl:String,
    description:String,
    button1:String,
    button2:String
})

module.exports= mongoose.model("gallery",gallery)