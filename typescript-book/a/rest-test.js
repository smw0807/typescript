const msft = {
  symbol: "MSFT",
  lastPrice: 50.0,
  exchange: {
    name: "NASDAQ",
    tradingHours: "9:30am-4pm"
  }
}

//원본까지 수정됨
// const test1 = {...msft};
// test1.exchange.name = 'NAS...';
// console.log(msft);
// console.log(test1);

//원본까지 수정됨
// const test2 = {...msft};
// msft.exchange.name = 'NAS...';
// console.log(msft);
// console.log(test2);

//원본까지 수정됨
// const test1 = Object.assign({}, msft);
// test1.exchange.name = 'NAS...';
// console.log(msft);
// console.log(test1);


//이건 test1만 수정됨
// const test1 = {...msft};
// test1.symbol = 'NAS...';
// console.log(msft);
// console.log(test1);

//복제만 수정됨
const test1 = JSON.parse(JSON.stringify(msft));
test1.exchange.name = 'NAS...';
console.log(msft);
console.log(test1);