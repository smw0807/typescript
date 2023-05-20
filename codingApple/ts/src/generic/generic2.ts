function g2<T>(x: T[]): T {
  return x[0];
}

let generic1 = g2([4, 2]);
let generic2 = g2(['a', 'b']);
console.log(generic1); //4
console.log(generic2); //a

let generic3 = g2<string>(['aaa', 'bbb']);
let generic4 = g2<number>([1, 2, 3]);

console.log(generic3); //aaa
console.log(generic4); //1
