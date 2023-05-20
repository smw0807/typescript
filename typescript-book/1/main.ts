function getFindPrice(price: number, discount: number) {
  return price - price/discount;
}

console.log(getFindPrice(100, 10));