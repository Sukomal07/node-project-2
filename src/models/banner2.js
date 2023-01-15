const mongoose = require('mongoose')

const banner2 = mongoose.Schema({
    heading:String,
    description:String,
    button:String,
    imgUrl:String
})
module.exports=mongoose.model("banner2", banner2)