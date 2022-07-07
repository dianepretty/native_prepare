const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
    name: { type: String, required: true },
    nationalId: { type: Number, required: true },
    phoneNumber: { type: String, required: true },
    positionId: [{ type: Schema.Types.ObjectId, ref: 'Positions' }]
})

const Candidate = mongoose.model("Candidates", CandidateSchema);
module.exports = Candidate;