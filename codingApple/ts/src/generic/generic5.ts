interface IG5 {
  name: string;
  age: number;
}

class G5<T> {
  constructor(public x: T) {}

  // consoleName() {
  // this.x;
  // console.log(this.x.name);
  // }
}

const g5 = new G5<IG5>({ age: 100, name: 'minwoo' });
g5.x.age;
