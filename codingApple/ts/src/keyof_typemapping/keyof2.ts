export {};
interface Person {
  [key: string]: number;
}
type PersonKeys = keyof Person; // string | number 타입이 된다.
let a: PersonKeys = 'age';
let b: PersonKeys = 'ageee';
let c: PersonKeys = 30;
