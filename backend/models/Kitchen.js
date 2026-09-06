const mongoose = require('mongoose');

const kitchenSchema = new mongoose.Schema({
  cookId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cookName: { type: String, required: true },
  cuisine: { type: String, required: true },
  city: { type: String, required: true },
  price: { type: Number, required: true },
  subscriptionPrice: { type: Number },
  desc: { type: String },
  bgColor: { type: String, default: 'bg-[#E6B37C]' }
}, { timestamps: true });

module.exports = mongoose.model('Kitchen', kitchenSchema);