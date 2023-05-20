// 함수 타입은 () => {} 형식으로
type methodsType = (a: string) => number;
// type a = function(a: string) {}

//함수 선언식 //Error
// function run1(a: string): methodsType { return 0 }
//함수 표현식
const run2: methodsType = a => {
  return 0;
};
//함수 표현식
const run3: methodsType = function (a) {
  return 0;
};

type Memnber = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};
//Object 안에 함수
let person: Memnber = {
  name: 'song',
  age: 32,
  plusOne(a: number) {
    return a + 1;
  },
  changeName: (): void => {},
};

// person.pulsOne(1);
/* 숙제1
- cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
- removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 
*/
type CutType = (x: string) => string;
const cutZero: CutType = (x: string) => {
  if (x.substring(0, 1).indexOf('0') !== -1) {
    x = x.substring(1, x.length);
  }
  return x;
};
console.log(cutZero('00123')); //0123
console.log(cutZero('0123')); //123
console.log(cutZero('1123')); //1123

const removeDash = (x: string): number => {
  // let result = 0;
  // const hyphenCount = x.match(/-/gi);
  // if (hyphenCount) return hyphenCount.length;
  // return result;
  let result = x.replace(/-/g, '');
  return parseFloat(result);
};
console.log(removeDash('0')); //0
console.log(removeDash('0-1')); //1
console.log(removeDash('01-23-456')); //123456

/* 숙제2
숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 
이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 
둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
*/
type RemoveType = (x: string) => number;
const run1 = (x: string, cutZero: CutType, removeDash: RemoveType): void => {
  const cut = cutZero(x);
  const remove = removeDash(cut);
  console.log(remove); //1012345678
};
run1('010-1234-5678', cutZero, removeDash);

type Params = {
  a: number;
  b: number;
};
type MathType = {
  a: number;
  b: number;
  plus: () => number;
  minus: () => number;
};
let mathMethods: MathType = {
  a: 1,
  b: 2,
  plus() {
    return this.a + this.b;
  },
  minus() {
    return this.a - this.b;
  },
};
console.log(mathMethods);
console.log(mathMethods.a); //1
console.log(mathMethods.b); //2
console.log(mathMethods.plus()); //3
console.log(mathMethods.minus()); //-1
