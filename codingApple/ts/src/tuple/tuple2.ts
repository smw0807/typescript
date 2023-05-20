function tuple2(...x: string[]) {
  console.log(x);
  //[ 'a', 'b', 'c', 'd' ]
}
tuple2('a', 'b', 'c', 'd');

function tuple22(...x: [string, number]) {
  console.log(x);
}
tuple22('aaa', 111);
tuple22('bbb', 222);
tuple22('ccc', 333);
