function g1(x: unknown[]) {
  return x[0];
}

let a = g1([4, 2]);
console.log(a); //4
// console.log(a + 1); // error, unkown 타입이라 에러남
