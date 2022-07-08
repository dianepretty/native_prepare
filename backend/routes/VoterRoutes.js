const { request } = require("express");
const express = require("express");
const router = express.Router();
const Voter = require("../models/Voter");



router.get("/get-all", (req, res) => {
    Voter.find().then((result) => {
        res.json({
            data: result
        })

    }).catch((err) => {
        console.log(err);
        res.status(400).json({ myerro: err });


    })

})

router.post("/register", (req, res) => {


    let newVoter = new Voter({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        nationalId: req.body.nationalId,
        address: req.body.address,
        password: req.body.password

    })

    newVoter.save()
        .then(result => {
            res.status(201).json({ data: result, message: "candidate saved" });
        })

    .catch(err => {
        res.status(400).json({ error: err, message: "candidate not saved" });
    })


})

router.post("/login", (req, res) => {
    const pass = req.body.password;
    Voter.find({ email: req.body.email })
        .then(async(result) => {

            if (Object.keys(result).length === 0) {
                res.status(404).json({ error: "Voter not found" });
            } else {
                if (bcrypt.compare(pass, result[0].password)) {
                    const user = result[0];
                    const token = jwt.sign({ name: user.name, email: user.email },
                        "trial", { expiresIn: "6h" });

                    res.status(200).json({ token: token, message: "valid" });
                } else {
                    res.status(400).json({ message: "invalid" });
                }
            }
        })
        .catch((err) => {
            res.status(400).json({ error: err });
        })
})


module.exports = router;