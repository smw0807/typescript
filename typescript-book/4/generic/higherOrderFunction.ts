const outerFunc = (someValue: number) => (multiplier: number) =>
  someValue * multiplier; //고차 함수 선언

const innerFunc = outerFunc(10); //innerFunc는 someValue = 10 인 클로저 함수

let result = innerFunc(5); //반환된 함수를 호출

console.log(result); //50
