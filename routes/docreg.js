const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const docregmod = require("../modela/docregmodel")


router.get('/', async (req, res) => {
    const getdocs = await docregmod.find()
    try{
        res.json(getdocs)
    }catch(err){res.json({message : err})}
})


router.post('/', async (req, res) => {
    const newdoc = new docregmod({
        fullname : req.body.fullname,
        hospitalname : req.body.hospitalname,
        doctorId : req.body.doctorId,
        email : req.body.email,
        password : req.body.password
    })
    try {
        const updoc = await newdoc.save()
        res.json(updoc)
    }catch (err) {res.json({message : err})}
})


module.exports = router