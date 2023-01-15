const mongoose = require('mongoose')
const slider = mongoose.Schema({
    title:String,
    subTitle:String,
    imgUrl:String,
    class:String
})

module.exports= mongoose.model('slider', slider)