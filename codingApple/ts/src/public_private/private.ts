class User2 {
  public name: string;
  private familyName: string;
  #job: string;

  constructor() {
    this.name = 'song';
    this.familyName = 'minwoo';
    this.#job = 'developer';
    // let hello = this.familyName + ' hello';
  }
}

let user2 = new User2();
user2.name = 'MinWoo';
console.log(user2);
// user2.familyName = 'song'; //error
// user2.job = 'dev'; //error
