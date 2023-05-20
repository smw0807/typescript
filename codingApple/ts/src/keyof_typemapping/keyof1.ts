export {};
interface Person {
  age: number;
  name: string;
}
type PersonKeys = keyof Person; //age | name 타입이 된다.
let a: PersonKeys = 'age'; //가능
let b: PersonKeys = 'ageee'; //에러
