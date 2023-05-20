export {};
type Bus = {
  color: string;
  model: boolean;
  price: number;
};
type TypeChanger<T> = {
  [K in keyof T]: string | number;
};

type NewBus = TypeChanger<Bus>;
let bus: NewBus = {
  color: '#22f2a2',
  model: 'kia',
  price: 500,
};
