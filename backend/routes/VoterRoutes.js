const { request } = require("express");
const express = require("express");
const router = express.Router();
const Voter = require("../models/Voter");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


/**
 * @swagger
 * /voter/get-all:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder votes
 *     tags:
 *       - voter
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
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


/**
 * @swagger
 * /voter/register:
 *   post:
 *     summary: Create new voter
 *     tags:
 *       - voter
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: Leanne Graham
 *               email:
 *                  type: string
 *                  description: The user's email.
 *                  example: example@gmail.com
 *               address:
 *                  type: string
 *                  description: candidate adress.
 *                  example: Kigali
 *               nationalId:
 *                  type: number
 *                  description: voter nationalId.
 *                  example: 1234567890
 *               phone:
 *                  type: string
 *                  description: User phone no.
 *                  example: 0788888888
 *               password:
 *                  type: string
 *                  description: voter password.
 *                  example: password
 * 
 * 
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Requests
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                    
 *                     name:
 *                       type: string
 *                       description: The user's name.
 *                       example: Leanne Graham
 *                     
 *                     email:
 *                       type: string
 *                       description: The user's email.
 *                       example: example@gmail.com
 * 
 *                     phone:
 *                       type: string
 *                       description: The user's email.
 *                       example: 0788888888
 * 
 *                     nationalId:
 *                       type: Number
 *                       description: The voter's id.
 *                       example: 76767767893
 *                     adress:
 *                       type: String
 *                       description: The adress
 *                       example: Kigali
 * 
 *                     password:
 *                      type: string
 *                      description: The user's age.
 *                      example: password
 */

router.post("/register", (req, res) => {

    Voter.find({ email: req.body.email })
        .then(async(result) => {
            if (Object.keys(result).length != 0) {
                res.status(400).json({ error: "Email taken", message: "user wasn't registered" })
            } else {
                const salt = await bcrypt.genSalt(10);
                const password = await bcrypt.hash(req.body.password, salt);

                let newVoter = new Voter({
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone,
                    nationalId: req.body.nationalId,
                    address: req.body.address,
                    password: password

                })

                newVoter.save()
                    .then((result) => {
                        res.status(200).json({ data: result, message: "voter created" });
                    })
                    .catch((err) => {
                        res.status(400).json({ error: err })
                    })
            }
        })
})




/**
 * @swagger
 * /voter/login:
 *   post:
 *     summary: Login.
 *     tags:
 *       - voter
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                  type: string
 *                  description: The user's email.
 *                  example: example@gmail.com
 *               password:
 *                  type: string
 *                  description: User password.
 *                  example: password
 * 
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Bad Requests
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 */
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
            res.status(400).json({ error: err, message: "voter not found" });
        })
})


module.exports = router;