const express = require('express');
const connectDB = require('./config/db');
const { connectRedis } = require('./config/redis');
const questionRoutes = require('./routes/questionRoutes');

const app = express();

connectDB();
connectRedis();

app.use('/question', questionRoutes);

module.exports = app;

