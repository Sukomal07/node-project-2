const mongoose = require('mongoose')

const banner1 = mongoose.Schema({
    heading:String,
    description:String,
    button:String,
    imgUrl:String
})
module.exports=mongoose.model("banner1", banner1)