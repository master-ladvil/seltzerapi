const express = require("express")
const router = express.Router()
const mongoose = require("mongoose");
const  patientmodel = require('../modela/patientmodel');
const bcrypt = require("bcryptjs");
const jsonwebtoken = require('jsonwebtoken');

const { registerValidation, loginValidation } = require('./validation');

router.get('/', async (req, res) => {
    const patmod = await patientmodel.find()
    try{
        res.json(patmod)
    }catch(err){res.json({message : err})}
})

//signup here
router.post('/reg', async (req, res) => {
    //user exists error
    const emailExist = await patientmodel.findOne({email : req.body.email});
    if (emailExist) return res.status(400).send('email already exists...!');

    //hass password.....
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newpat = new patientmodel({
        patientname : req.body.patientname,
        patientId : req.body.patientId,
        aadhar : req.body.aadhar,
        email : req.body.email,
        password : hashedPassword
    })
    try {
        const uppat = await newpat.save()
        res.json({ newpat: newpat._id});
    }catch (err) {res.json({message : err})}
})



//im gonna sign in here....which is gonna return the token..
router.post("/login", async (req,res) => {
    //mail exists or not
    const email = await patientmodel.findOne({email : req.body.email});
    if (!email) return res.status(400).send('email is not found..!');

    const checkpatient = await patientmodel.findOne({email : req.body.email})
    patientpassword = checkpatient.password

    //password is correct...
    const validPass = await bcrypt.compare(req.body.password, patientpassword);
    if(!validPass) return res.status(400).send('invalid password.....!');


    //here comes the token....
    const token = jsonwebtoken.sign({_id: checkpatient._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
    
})

module.exports = router