//함수, 파라미터, 반환 값에 타입 T를 지정
function printMe<T>(content: T): T {
  console.log(content);
  return content;
}

const a = printMe('hello!!!');

class Person {
  constructor(public name: string) {}
}

const b = printMe(new Person('minwoo'));
