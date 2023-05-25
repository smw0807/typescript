export {};

function run(a: number) {
  console.log(a);
}
//@ts-ignore
const a = run('1'); //타입체크 무시해서 에러 안남
const b = run('2'); //에러남
//@ts-ignore
const c = run('b');
