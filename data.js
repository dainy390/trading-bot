// src/data.js
const mockStockData = {
    stock: "XYZ",
    price: 100,
    history: []
  };
  
  // Function to simulate price changes
  function getMockStockPrice() {
    const priceFluctuation = (Math.random() - 0.5) * 5; // Simulates price changes by ±2.5
    mockStockData.price += priceFluctuation;
    mockStockData.price = Math.max(0, mockStockData.price); // Ensure price doesn't go below 0
    mockStockData.history.push(mockStockData.price);
    return mockStockData;
  }
  
  module.exports = {
    getMockStockPrice
  };
  