export {};

interface ICar {
  model: string;
  price: number;
}
class Car implements ICar {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}

let bb = new Car('morning');
