class User3 {
  public name: string;
  private job: string;

  constructor() {
    this.name = 'minwoo';
    this.job = 'developer';
    let hello = `Hello ${this.job} ${this.name}.`;
    console.log(hello);
  }

  changeJob() {
    this.job = 'tester';
  }
}

let user3 = new User3();
user3.name = 'Minwoo, Song';
user3.changeJob();
console.log(user3);
