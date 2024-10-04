// src/bot.js
const { getMockStockPrice } = require('./data');
let position = null;
let balance = 10000;  // Starting balance in dollars
let shares = 0;       // Number of shares held
let tradeHistory = [];

function executeTrade(action, price) {
  if (action === "buy" && position === null) {
    shares = Math.floor(balance / price);
    balance -= shares * price;
    position = "buy";
    tradeHistory.push({ action: "buy", price, shares });
    console.log(`Bought ${shares} shares at $${price}`);
  } else if (action === "sell" && position === "buy") {
    balance += shares * price;
    tradeHistory.push({ action: "sell", price, shares });
    console.log(`Sold ${shares} shares at $${price}`);
    shares = 0;
    position = null;
  }
}

// Trading strategy: buy at -2%, sell at +3%
function tradingBot() {
  const { price } = getMockStockPrice();
  console.log(`Current Price: $${price}`);
  
  if (position === null && price < 98) {
    executeTrade("buy", price);
  } else if (position === "buy" && price > 103) {
    executeTrade("sell", price);
  }
}

module.exports = {
  tradingBot,
  tradeHistory,
  balance
};
