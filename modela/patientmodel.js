const number = require("@hapi/joi/lib/types/number")
const string = require("@hapi/joi/lib/types/string")
const mongoose = require("mongoose")

const postschema = mongoose.Schema({

    patientname : {
        type: String,
        required: true
    },
    patientId : {
        type: String,
        required: true
    },
    aadhar :{
        type: string,
        required: true
    },
    email : {
        type: String,
        required : true
    },
    password : {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('patientmodel',postschema)