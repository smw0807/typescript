export {};
type Bus = {
  color: string;
  model: boolean;
  price: number;
};
type TypeChanger<O, T> = {
  [K in keyof O]: T;
};

type TypeString = TypeChanger<Bus, string>;
type TypeStringArray = TypeChanger<Bus, string[]>;
type TypeNumber = TypeChanger<Bus, number>;
type TypeBoolean = TypeChanger<Bus, boolean>;

let a: TypeString = {
  color: 'a',
  model: 'b',
  price: 'c',
};

let b: TypeStringArray = {
  color: ['a', 'aa', 'aaa'],
  model: ['b', 'bb', 'bbb'],
  price: ['c', 'cc', 'ccc'],
};

let c: TypeNumber = {
  color: 999,
  model: 1,
  price: 5000,
};

let e: TypeBoolean = {
  color: false,
  model: false,
  price: true,
};
