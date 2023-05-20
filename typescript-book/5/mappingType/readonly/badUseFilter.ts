interface Person3 {
  name: string;
  age: number;
}
const person3: Person3[] = [
  { name: 'min', age: 31 },
  { name: 'woo', age: 31 },
];
//타입 체크를 하지 않는 함수.
function filterBy<T>(property: any, value: any, array: T[]) {
  //프로퍼티와 값을 기반으로 데이터를 필터링 한다.
  return array.filter(item => item[property] === value);
}

console.log(filterBy('name', 'min', person3)); //올바른 함수 호출
console.log(filterBy('lastName', 'woo', person3)); //잘못된 함수 호출(lastName은 없음)
console.log(filterBy('age', 'kkk', person3)); //잘못된 함수 호출(age는 number인데 string을 넘김)
