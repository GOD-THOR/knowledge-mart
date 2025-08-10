const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');

// Create listing
router.post('/', async (req, res) => {
  const listing = new Listing({ ...req.body, seller: req.user.id });
  await listing.save();
  res.status(201).json(listing);
});

// Get listings with search/filter
router.get('/', async (req, res) => {
  const { keyword, category, minPrice, maxPrice } = req.query;
  const query = {};
  if (keyword) query.title = { $regex: keyword, $options: 'i' };
  if (category) query.category = category;
  if (minPrice) query.price = { ...query.price, $gte: Number(minPrice) };
  if (maxPrice) query.price = { ...query.price, $lte: Number(maxPrice) };
  const listings = await Listing.find(query);
  res.json(listings);
});

module.exports = router;