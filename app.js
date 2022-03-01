const express = require("express")
const bp = require("body-parser")
const mongoose = require("mongoose")
const app = express()
require("dotenv/config")

app.use(bp.json())
app.use(bp.urlencoded({useNewUrlParser : true}))

const presrouter = require("./routes/doctor")


app.use("/doc" , presrouter)


app.get('/',(req,res) => {
    res.send("hello mf")
})

const  connect  =  mongoose.connect(process.env.local, { useNewUrlParser: true , useUnifiedTopology: true })
connect.then(db  =>  {
    console.log("connected correctly to the server")})


PORT = process.env.port || 5300

app.listen(PORT, () => {
    console.log("Seltzer active")
})