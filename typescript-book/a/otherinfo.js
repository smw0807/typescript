const msft = {
  symbol: "MSFT",
  lastPrice: 50.0,
  exchange: {
    name: "NASDAQ",
    tradingHours: "9:30am-4pm"
  }
}

const { lastPrice, ...data } = msft;
console.log(`lastPrice : ${lastPrice}`);
console.log('otherinfo : ',data);