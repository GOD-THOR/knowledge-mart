const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  category: String,
  price: Number,
  fileUrl: String,
  videoUrl: String,
  ratings: [{ type: Number }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
}, { timestamps: true });

module.exports = mongoose.model('Listing', ListingSchema);