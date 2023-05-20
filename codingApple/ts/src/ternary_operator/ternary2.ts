export {};
type Age<T> = T extends string ? string : unknown;

let a: Age<string> = 'a'; //string 타입
let b: Age<number> = 1; //unkonw 타입이됨
