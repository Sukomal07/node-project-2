const mongoose = require('mongoose')

const detail = require('../models/details')
const slider = require('../models/slider')
const service = require("../models/service")
const banner1 = require("../models/banner1")
const banner2 = require("../models/banner2")
const banner3 = require("../models/banner3")
const gallery = require("../models/gallery")

//creating a database
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://0.0.0.0:27017/website")
.then(()=>{
    console.log("Connection successful")
    // gallery.create([
    //     {
    //         imgUrl:"/static/images/photo1.jpg",
    //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illo suscipit quibusdam.",
    //         button1:"View",
    //         button2:"Edit"
    //     },
    //     {
    //         imgUrl:"/static/images/photo1.jpg",
    //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illo suscipit quibusdam.",
    //         button1:"View",
    //         button2:"Edit"
    //     },
    //     {
    //         imgUrl:"/static/images/photo1.jpg",
    //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illo suscipit quibusdam.",
    //         button1:"View",
    //         button2:"Edit"
    //     },
    //     {
    //         imgUrl:"/static/images/photo1.jpg",
    //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illo suscipit quibusdam.",
    //         button1:"View",
    //         button2:"Edit"
    //     },
    //     {
    //         imgUrl:"/static/images/photo1.jpg",
    //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illo suscipit quibusdam.",
    //         button1:"View",
    //         button2:"Edit"
    //     },
    //     {
    //         imgUrl:"/static/images/photo1.jpg",
    //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illo suscipit quibusdam.",
    //         button1:"View",
    //         button2:"Edit"
    //     },
    //     {
    //         imgUrl:"/static/images/photo1.jpg",
    //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illo suscipit quibusdam.",
    //         button1:"View",
    //         button2:"Edit"
    //     },
    //     {
    //         imgUrl:"/static/images/photo1.jpg",
    //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illo suscipit quibusdam.",
    //         button1:"View",
    //         button2:"Edit"
    //     },
    //     {
    //         imgUrl:"/static/images/photo1.jpg",
    //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illo suscipit quibusdam.",
    //         button1:"View",
    //         button2:"Edit"
    //     },
    //     {
    //         imgUrl:"/static/images/photo1.jpg",
    //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illo suscipit quibusdam.",
    //         button1:"View",
    //         button2:"Edit"
    //     },
    //     {
    //         imgUrl:"/static/images/photo1.jpg",
    //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illo suscipit quibusdam.",
    //         button1:"View",
    //         button2:"Edit"
    //     },
    //     {
    //         imgUrl:"/static/images/photo1.jpg",
    //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illo suscipit quibusdam.",
    //         button1:"View",
    //         button2:"Edit"
    //     },
    //     {
    //         imgUrl:"/static/images/photo1.jpg",
    //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illo suscipit quibusdam.",
    //         button1:"View",
    //         button2:"Edit"
    //     },
    //     {
    //         imgUrl:"/static/images/photo1.jpg",
    //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illo suscipit quibusdam.",
    //         button1:"View",
    //         button2:"Edit"
    //     },
    //     {
    //         imgUrl:"/static/images/photo1.jpg",
    //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illo suscipit quibusdam.",
    //         button1:"View",
    //         button2:"Edit"
    //     },
    //     {
    //         imgUrl:"/static/images/photo1.jpg",
    //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illo suscipit quibusdam.",
    //         button1:"View",
    //         button2:"Edit"
    //     },
    //     {
    //         imgUrl:"/static/images/photo1.jpg",
    //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illo suscipit quibusdam.",
    //         button1:"View",
    //         button2:"Edit"
    //     },
    //     {
    //         imgUrl:"/static/images/photo1.jpg",
    //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illo suscipit quibusdam.",
    //         button1:"View",
    //         button2:"Edit"
    //     }
        
        
        
    // ])
}).catch((error)=>{
    console.log(error)
})
