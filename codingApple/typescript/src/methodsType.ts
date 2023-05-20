function methods(x: number | string): void {
  if (typeof x === 'number') {
    console.log(x * 2);
  } else if (typeof x === 'string') {
    console.log(x);
  }
  // return x * 2;
}

console.log(methods(100));
console.log(methods('aaa'));
console.log(methods(2));
console.log(methods('bbb'));

function homework1(name: string): string {
  let result = '';
  if (!name) result = '이름이 없습니다';
  else result = '안녕하세요' + name;
  return result;
}

console.log('1-1 : ', homework1());
console.log('1-2 : ', homework1('송민우'));

function homework2(x: number | string): void {
  if (typeof x === 'number') {
    console.log(x.toString().length);
  } else if (typeof x === 'string') {
    console.log(x.length);
  } else {
    throw new Error('Only number of string');
  }
}
console.log(homework2(111));
console.log(homework2('111'));
// console.log(homework2(true));

function homework3(income: number, hasHouse: boolean, score: string) {
  let result = 0;
  result += income;
  if (hasHouse) result += 500;
  if (score === '상') result += 100;
  if (result >= 600) return '가능';
}
console.log('ooooo');
console.log(homework3(100, true, '상'));
console.log(homework3(600, false, '하'));
console.log(homework3(100, false, '하'));
console.log(homework3(300, true, '중'));

function check(x: number | string) {
  let array: number[] = [];
  if (typeof x === 'number') {
    array[0] = x;
  }
}
function check2(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}
