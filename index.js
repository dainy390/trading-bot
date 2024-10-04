// src/index.js
const express = require('express');
const { tradingBot, tradeHistory, balance } = require('./bot');
const schedule = require('node-schedule');

const app = express();
const PORT = 3000;

// Endpoint to get stock prices
app.get('/stock', (req, res) => {
  res.send({ message: "Stock prices updated" });
});

// Endpoint to get trade history
app.get('/trades', (req, res) => {
  res.json({
    tradeHistory,
    balance
  });
});

// Schedule the bot to run every 5 seconds
schedule.scheduleJob('*/5 * * * * *', () => {
  tradingBot();
});

app.listen(PORT, () => {
  console.log(`Trading bot running on port ${PORT}`);
});
