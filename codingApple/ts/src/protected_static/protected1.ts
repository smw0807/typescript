class protected1 {
  private name: string;
  public number: number;
  protected age: number;
  constructor() {
    this.name = 'minwoo';
    this.number = 1;
    this.age = 32;
  }
}

const p4 = new protected1();
console.log(p4.number);
// console.log(p4.age); //protected라 접근안됨

class protected11 extends protected1 {
  private job: string;
  public index: number;
  // name = 'ss'; //안됨
  number = 2;
  age = 32;
  constructor() {
    super();
    this.job = 'dev';
    this.index = 0;
  }
  run() {
    console.log(this.age); //protected라 여기선 접근됨
  }
}

const p44 = new protected11();
console.log(p44.index);
console.log(p44.number);
console.log(p44.run());
// console.log(p44.age);//protected라 접근안됨
