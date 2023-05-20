class Hw<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}
let hw3 = new Hw<string>('어쩌구');
hw3.name;

let hw33 = new Hw<number>(3);
hw33.name;

let hw333 = new Hw<string[]>(['a', 'b']);
hw333.name;

let hw3333 = new Hw('a');
hw3333.name;

let hw33333 = new Hw(1);
hw33333.name;

let hw333333 = new Hw(['a', 'b']);
hw333333.name;
