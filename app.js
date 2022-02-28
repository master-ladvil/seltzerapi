const express = require("express")
const bp = require("body-parser")
const mongoose = require("mongoose")
const app = express()
require("dotenv/config")

app.use(bp.json())
app.use(bp.urlencoded({useNewUrlParser : true}))

const presrouter = require("./routes/doctor")


app.use("/doc" , presrouter)

mongoose.connect(process.env.db,{
    useNewUrlParser : true,
    useUnifiedTopology : true},() => console.log("connected to db")
)

app.get('/', (req,res) => {
    res.send("helo mf")
})



app.listen(5300)
console.log("Seltzer active")