const express = require("express");
const router = express.Router();
const Positions = require("../models/Positions");


router.get("/get-all", (req, res) => {
    Positions.find().then((result) => {
        res.json({
            data: result
        })

    }).catch((err) => {
        console.log(err);
        res.status(400).json({ myerro: err });


    })

})

router.post("/register", (req, res) => {


    let newPosition = new Positions({
        name: req.body.name
    })

    newPosition.save()
        .then(result => {
            res.status(201).json({ data: result, message: "position saved" });
        })

    .catch(err => {
        res.status(400).json({ error: err, message: "position not saved" });
    })


})

module.exports = router;