const mongoose = require('mongoose')

const banner3 = mongoose.Schema({
    heading:String,
    description:String,
    button:String,
    imgUrl:String
})
module.exports=mongoose.model("banner3", banner3)