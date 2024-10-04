// strategies/movingAvg.js
function calculateMovingAverage(data, period) {
    if (data.length < period) return null;
    const recentPrices = data.slice(-period);
    const sum = recentPrices.reduce((acc, price) => acc + price, 0);
    return sum / period;
  }
  
  module.exports = {
    calculateMovingAverage
  };
  