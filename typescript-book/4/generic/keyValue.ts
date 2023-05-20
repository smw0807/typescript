class Pair<K, V> {
  constructor(public key: K, public value: V) {}
}

function compare<K, V>(pair1: Pair<K, V>, pair2: Pair<K, V>): boolean {
  return pair1.key === pair2.key && pair1.value === pair2.value;
}

//<number, string> 타입인 첫 번째 Pair를 생성
let p1: Pair<number, string> = new Pair(1, 'Apple');
//타입 참조를 사용해 <number, string> 두 번째 Pair를 생성
let p2 = new Pair(1, 'Orange');
//p1과 p2를 비교
console.log(compare<number, string>(p1, p2)); //false

//string, string 타입인 첫 번쨰 Pair를 생성
let p3 = new Pair('first', 'Apple');
//타입 참조를 사용해 <string, string> 두 번째 Pair를 생성
let p4 = new Pair('first', 'Apple');
//p3와 p4를 비교
console.log(compare(p3, p4)); //true
