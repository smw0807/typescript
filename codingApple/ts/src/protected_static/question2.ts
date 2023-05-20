class UserB {
  private static x = 10;
  public static y = 20;

  static addOne(v: number): void {
    this.x += v;
  }
  static printX(): void {
    console.log(this.x);
  }
}

UserB.addOne(3) //이렇게 하면 x가 3 더해져야함
UserB.addOne(4) //이렇게 하면 x가 4 더해져야함
UserB.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함