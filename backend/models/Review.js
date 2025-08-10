const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  listing: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing' },
  reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: Number,
  comment: String
}, { timestamps: true });

module.exports = mongoose.model('Review', ReviewSchema);