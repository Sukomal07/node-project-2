const mongoose = require('mongoose')
const details = mongoose.Schema({
    brandName:String,
    links:[
        {
            label:String,
            url:String,
        }
    ],
})

module.exports = mongoose.model("detail" , details)