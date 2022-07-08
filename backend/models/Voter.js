const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const VoterSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    nationalId: { type: String, required: true },
    address: { type: String, required: true },
    password: { type: String, required: true }
})

const Voter = mongoose.model("Voters", VoterSchema);
module.exports = Voter;