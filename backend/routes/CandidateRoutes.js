const { request } = require("express");
const express = require("express");
const router = express.Router();
const Candidate = require("../models/Candidate");


router.get("/get-all", (req, res) => {
    Candidate.find().then((result) => {
        res.json({
            data: result
        })

    }).catch((err) => {
        console.log(err);
        res.status(400).json({ myerro: err });


    })

})

router.post("/register", (req, res) => {


    let newCandidate = new Candidate({
        name: req.body.name,
        nationalId: req.body.nationalId,
        phoneNumber: req.body.phoneNumber,
        positionId: req.body.positionId

    })

    newCandidate.save()
        .then(result => {
            res.status(201).json({ data: result, message: "candidate saved" });
        })

    .catch(err => {
        res.status(400).json({ error: err, message: "candidate not saved" });
    })


})
module.exports = router;