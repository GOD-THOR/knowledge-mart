const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  const msg = new Message({
    sender: req.user.id,
    recipient: req.body.recipient,
    content: req.body.content
  });
  await msg.save();
  res.status(201).json(msg);
});

router.get('/', async (req, res) => {
  const messages = await Message.find({
    $or: [{ sender: req.user.id }, { recipient: req.user.id }]
  });
  res.json(messages);
});

module.exports = router;