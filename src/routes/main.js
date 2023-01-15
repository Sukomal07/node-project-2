const express = require('express')
const {route} = require('express/lib/application')

const detail = require("../models/details")
const service = require('../models/service')
const slider = require('../models/slider')
const contact = require('../models/contact')
const banner1 = require('../models/banner1')
const banner2 = require('../models/banner2')
const banner3 = require('../models/banner3')
const gallery = require('../models/gallery')




const routes = express.Router()

routes.get("/" ,async (req , res) =>{
    const details =await detail.findOne({"_id":"63c00c91de024c5a406249a4"})
    const slide = await slider.find()
    const services = await service.find()
    const banner_1 = await banner1.find()
    const banner_2 = await banner2.find()
    const banner_3 = await banner3.find()
    res.render("index", {
        details:details,
        slide:slide,
        services:services,
        banner_1:banner_1,
        banner_2:banner_2,
        banner_3:banner_3
    })
})
routes.get("/Gallery" ,async (req , res) =>{
    const details =await detail.findOne({"_id":"63c00c91de024c5a406249a4"})
    const galleries = await gallery.find()
    res.render("gallery", {
        details:details,
        galleries:galleries
    })
})

routes.get("/admin" , async(req , res) =>{
    const details =await detail.findOne({"_id":"63c00c91de024c5a406249a4"})
    console.log("Connect Successful in admin panel")
    res.render("login" ,{
        details:details
    })
})

//contact form 
routes.post("/process-contact-form" ,async (req , res) =>{
    try {
        const data = await contact.create(req.body)
        res.redirect("/")
    } catch (error) {
        console.log(error)
        res.redirect("/")
    }
})

module.exports = routes