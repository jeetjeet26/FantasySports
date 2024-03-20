const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchupSchema = new Schema({
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  scores: Map, // A map of userId to score
  week: { type: Number, required: true },
  outcome: { type: String }, // Could be "win", "loss", or "draw" for each participant
}, { timestamps: true });

const Matchup = mongoose.model('Matchup', matchupSchema);

module.exports = Matchup;
