// K, V
export {};
interface IObj {
  name: string;
  age: number;
}
function run<K, V>(x: K, y: V): void {
  console.log('x : ', x);
  console.log('y : ', y);
}

run<number, string>(0, 'aaa');
run<string, string>('aa', 'bb');
run<number, IObj>(0, { name: 'a', age: 20 });
