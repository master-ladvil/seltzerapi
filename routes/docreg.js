const express = require("express")
const router = express.Router()
const mongoose = require("mongoose");
const docregmodel = require("../modela/docregmodel");
const docregmod = require("../modela/docregmodel");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

const newdoc = require("../modela/docregmodel");

const { registerValidation, loginValidation } = require('./validation');

router.get('/', async (req, res) => {
    const getdocs = await docregmod.find()
    try{
        res.json(getdocs)
    }catch(err){res.json({message : err})}
})

//signup here
router.post('/', async (req, res) => {
    //user exists error
    const emailExist = await docregmodel.findOne({email : req.body.email});
    if (emailExist) return res.status(400).send('email already exists...!');

    //hass password.....
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newdoc = new docregmod({
        fullname : req.body.fullname,
        hospitalname : req.body.hospitalname,
        doctorId : req.body.doctorId,
        email : req.body.email,
        password : hashedPassword
    })
    try {
        const updoc = await newdoc.save()
        res.json({ newdoc: newdoc._id});
    }catch (err) {res.json({message : err})}
})



//im gonna sign in here....which is gonna return the token..
router.post("/doc", async (req,res) => {
    //mail exists or not
    const email = await docregmodel.findOne({email : req.body.email});
    if (!email) return res.status(400).send('email is not found..!');

    const checkdoctor = await docregmod.findOne({email : req.body.email})
    doctorpassword = checkdoctor.password

    //password is correct...
    const validPass = await bcrypt.compare(req.body.password, doctorpassword);
    if(!validPass) return res.status(400).send('invalid password.....!');
            
    //here comes the token....
    const token = jsonwebtoken.sign({_id: newdoc._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

})

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDg1NDkxOTl9.tl_Pt3eXhtL_TG90TWCDHykoMIOyNl2TSL4IsKLuVvo
module.exports = router