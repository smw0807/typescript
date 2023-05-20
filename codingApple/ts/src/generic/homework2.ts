interface IAnimal {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';
let data2 = '{"name1" : "dog", "age" : 1 }';

function hw2<T extends IAnimal>(x: string): T {
  return JSON.parse(x);
}

function hw22<T>(x: string): T {
  return JSON.parse(x);
}

console.log(hw2(data));

console.log(hw2<IAnimal>(data));
console.log(hw2<IAnimal>(data2));

console.log(hw22<IAnimal>(data));
console.log(hw22<IAnimal>(data2));
