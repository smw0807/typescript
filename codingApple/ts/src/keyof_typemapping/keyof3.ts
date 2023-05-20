export {};
type Car = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};
type TypeChanger<T> = {
  [K in keyof T]: string;
};

type StringCar = TypeChanger<Car>;
let car: StringCar = {
  color: '#000',
  model: 'kia',
  price: '$500',
};
