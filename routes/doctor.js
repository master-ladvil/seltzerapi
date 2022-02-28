const express = require("express")
const router = express.Router()

const presmod = require("../modela/prescription")


router.get ('/pres', async (req,res)=> {
    const getpres = await presmod.find()
    res.json(getpres)
})

router.post("/pres", async (req,res) => {
    const newpres = new presmod({
        docname : req.body.docname,
        docId: req.body.docId,
        patientname : req.body.patientname,
        patientId : req.body.patientId,
        date : req.body.date,
        drugs:{
            drug1 : {
                name : req.body.drugs.drug1.name,
                dose : req.body.drugs.drug1.dose,
                totalquantity : req.body.drugs.drug1.totalquantity,
                sched : {
                    morn : {quantity : req.body.drugs.drug1.sched.morn.quantity},
                    lunch : {quantity : req.body.drugs.drug1.sched.lunch.quantity},
                    evening : {quantity :req.body.drugs.drug1.sched.evening.quantity},
                    dinner : {quantity : req.body.drugs.drug1.sched.dinner.quantity}
                }
            }
        }
    })

    try{
        const uppres = await newpres.save()
        res.json(uppres)
    }catch(err){res.json({message : err})}
})


module.exports = router