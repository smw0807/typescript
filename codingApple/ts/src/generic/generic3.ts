function g3<T extends number>(x: T): T {
  return x;
}

let number1 = g3(3);
// let number2 = g3('3'); //number가 아니라 에러
