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
router.put("/update/:id", (req, res) => {
    var id = req.params.id;
    Candidate.find({ _id: id }).then(result => {
        if (Object.keys(result).length != 0) {
            let updateOps = {};
            const body = req.body;

            for (const ops in body) {
                updateOps[ops] = body[ops];
            }


            Candidate.updateOne({ _id: id }, { $set: updateOps }).then((result => {
                    res.status(201).json({ "message": "updated" });
                }))
                .catch((err) => {
                    res.status(400).json({ "message": result });
                })

        } else {
            res.status(400).json({ error: "candidate not found", message: "Candidate not updated" });
        }

    })
})
module.exports = router;