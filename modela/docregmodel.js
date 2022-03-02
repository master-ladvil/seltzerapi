const mongoose = require("mongoose")

const docregmodel = mongoose.Schema({

    fullname : {
        type: String,
        required: true
    },
    hospitalname : {
        type : String,
        required : true
    },
    doctorId : {
        type: String,
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

module.exports = mongoose.model('docregmodel',docregmodel)