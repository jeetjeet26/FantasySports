const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cosmeticItemSchema = new Schema({
  name: { type: String, required: true, unique: true },
  cost: { type: Number, required: true },
  attributes: { type: Map, of: String }, // Flexible schema to store item attributes
}, { timestamps: true });

const CosmeticItem = mongoose.model('CosmeticItem', cosmeticItemSchema);

module.exports = CosmeticItem;
