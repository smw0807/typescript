function maxNumber(...a: number[]): number {
  let result: number = 0;
  for (let i of a) {
    if (i > result) result = i;
  }
  return result;
}

const number = maxNumber(6, 3, 7, 2);
console.log(number);

interface IB {
  b: boolean;
  n: number;
  s: string;
  a: number[];
}
type bType = (boolean | number | string | number[])[];
function b(...a: bType) {
  console.log(a);
  //[ true, 1, 'a', [ 1, 2, 3 ] ]
}
function b2(...a: IB[]) {
  console.log(a);
  //[ { b: false, n: 2, s: 'b', a: [ 4, 5, 6 ] } ]
}

b(true, 1, 'a', [1, 2, 3]);
// b2(true, 2, 'b', [4, 5, 6]);
b2({
  b: false,
  n: 2,
  s: 'b',
  a: [4, 5, 6],
});
