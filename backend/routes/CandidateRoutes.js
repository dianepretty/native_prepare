const { request } = require("express");
const express = require("express");
const router = express.Router();
const Candidate = require("../models/Candidate");


/**
 * @swagger
 * /candidate/get-all:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder votes
 *     tags:
 *       - candidate
 *     responses:
 *       200:
 *         description: A list of candidates.
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
    Candidate.find().then((result) => {
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
 * /candidate/register:
 *   post:
 *     summary: Create new Candidate
 *     tags:
 *       - candidate
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
 *               nationalId:
 *                  type: Number
 *                  description: The user's email.
 *                  example: 122333333
 *               gender:
 *                  type: string
 *                  description: Candidate.
 *                  example: female
 *               mission:
 *                  type: string
 *                  description: Candidate.
 *                  example: saving the world
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
 */
router.post("/register", (req, res) => {


    let newCandidate = new Candidate({
        name: req.body.name,
        nationalId: req.body.nationalId,
        gender: req.body.gender,
        mission: req.body.mission

    })

    newCandidate.save()
        .then(result => {
            res.status(201).json({ data: result, message: "candidate saved" });
        })

    .catch(err => {
        res.status(400).json({ error: err, message: "candidate not saved" });
    })


})


/**
 * @swagger
 * /candidate/update/{id}:
 *   put:
 *     summary: update candidate.
 *     tags:
 *       - candidate
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *               type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               votes:
 *                 type: number
 *                 description: The candidate's votes.
 *                 example: 2
 * 
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 */
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
    /**
     * @swagger
     * /candidate/delete/{id}:
     *   delete:
     *     summary: delete a  candidate by id
     *     tags:
     *       - candidate
     *     parameters:
     *        - in: path
     *          name: id
     *          required: true
     *          schema:
     *               type: string
     *     responses:
     *       201:
     *         description: Created
     *       400: 
     *         description: Bad request
     *       
     */
router.delete("/delete/:id", (req, res) => {

    Candidate.findById(req.params.id)
        .then(result => {
            if (Object.keys(result).length != 0) {

                Candidate.deleteOne({ _id: req.params.id })
                    .then(() => {
                        res.status(200).json({ result: "candidate deleted" })
                    })
                    .catch((err) => {
                        res.status(500).json({ err: err })
                    })

            } else {
                res.status(404).json({ "message": " candidate not found" })
            }

        })

})
module.exports = router;