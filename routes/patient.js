const express = require("express")
const router = express.Router()



router.get('/', (req,res) => {
    res.send("hello mf inside patient")
})


module.exports = router;