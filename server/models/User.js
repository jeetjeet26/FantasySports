const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Store hashed passwords
  email: { type: String, required: true, unique: true },
  vcBalance: { type: Number, default: 0 },
  ownedCosmetics: [{ type: Schema.Types.ObjectId, ref: 'CosmeticItem' }],
  // Additional fields as needed for fantasy sports performance tracking
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
