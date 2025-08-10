const express = require('express');
const mongoose = require('mongoose');
const app = express();
const auth = require('./middleware/auth');

mongoose.connect('mongodb://localhost:27017/knowledge-mart');

app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/listings', auth, require('./routes/listings'));
app.use('/api/messages', auth, require('./routes/messages'));
app.use('/api/payment', auth, require('./routes/payment'));

app.listen(5000, () => console.log('Server started on http://localhost:5000'));