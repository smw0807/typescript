export {};
interface ICar {
  model: string;
  tax: (price: number) => number;
}

// class Car implements ICar {
//   model; //타입을 지정해주지 않으면 any 타입이됨
//   tax(a) {
//     //타입을 지정해주지 않으면 any 타입이됨
//     return a * 0.1;
//   }
// }
