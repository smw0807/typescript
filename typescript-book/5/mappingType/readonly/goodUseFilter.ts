interface Person4 {
  name: string;
  age: number;
}

const person4: Person4[] = [
  { name: 'min', age: 31 },
  { name: 'woo', age: 31 },
];

//프로퍼티가 keyof T 유니온에 속하는지 확인한다.
function filterBy<T, P extends keyof T>(
  property: P, //필터링할 프로퍼티
  value: T[P], //제공된 프로퍼티 타입을 확인하여 필터링하는 값
  array: T[]
) {
  return array.filter(item => item[property] === value);
}
console.log(filterBy('name', 'min', person4)); //올바른 함수 호출
console.log(filterBy('lastName', 'woo', person4)); //잘못된 함수 호출(lastName은 없음)
console.log(filterBy('age', 'kkk', person4)); //잘못된 함수 호출(age는 number인데 string을 넘김)
