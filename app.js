const express = require("express")
const bp = require("body-parser")
const mongoose = require("mongoose")
const app = express()
require("dotenv/config")

app.use(bp.json())
app.use(bp.urlencoded({useNewUrlParser : true}))

const presrouter = require("./routes/doctor")
const docregrouter = require("./routes/docreg")


app.use("/doc" , presrouter)
app.use("/reg/doc", docregrouter)

app.get('/',(req,res) => {
    res.send("hello mf")
})

const  connect  =  mongoose.connect(process.env.db, { useNewUrlParser: true , useUnifiedTopology: true })
connect.then(db  =>  {
    console.log("connected correctly to the server")})


app.set('port', process.env.PORT || 5300)



app.listen(app.get('port'), () => console.log('listening on port ' + app.get('port')))
