class static1 {
  static x: number = 1;
  private static y: number = 2;
  public z: number = 3;

  public sum = static1.x * static1.y * this.z;
  //static.z는 안됨
  //this.x, this.y는 안됨
  constructor() {
    this.z = 5;
  }
  static run() {
    static1.y = 5;
    // this.y = 4;
    console.log(this.y);
    //static 함수라 static 속성에 this로 접근 가능
  }
  run2() {
    static1.x = 5;
    this.z = 5;
    //static 속성에 this로 접근 불가능
  }
}

const s1 = new static1();
console.log(static1.x);
console.log(s1.sum);
static1.run();
