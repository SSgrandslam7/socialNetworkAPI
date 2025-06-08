const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB');

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));