const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const PositionsSchema = new Schema({
    name: { type: String, required: true },
})

const Positions = mongoose.model("Positions", PositionsSchema);
module.exports = Positions;