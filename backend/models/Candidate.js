const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
    name: { type: String, required: true },
    nationalId: { type: Number, required: true },
    gender: { type: String, enum: ['male', 'female'], default: "female" },
    mission: { type: String, required: true },
    votes: { type: Number, required: true, default: 0 }
})

const Candidate = mongoose.model("Candidates", CandidateSchema);
module.exports = Candidate