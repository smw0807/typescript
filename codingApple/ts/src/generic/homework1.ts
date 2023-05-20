/**
 * 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요?
 */
// function hw1<T>(x: T): void {
//   if (typeof x === 'string') {
//     console.log(x.length);
//   } else if (typeof x === 'object' && Array.isArray(x)) {
//     console.log(x.length);
//   }
// }

function hw1<T extends string | string[]>(x: T) {
  console.log(x.length);
}

const hwRun1 = hw1('hello');
const hwRun2 = hw1(['min', 'woo']);
