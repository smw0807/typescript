function getFindPrice(price, discount) {
    return price - price / discount;
}
console.log(getFindPrice(100, 10));
