// function g4<T>(x: T) {
//   //T를 밑에서 string으로 넣어줬지만, number나 다른 것들도 올 수 있기 때문에 에러가 발생함
//   return x.length;
// }
// let lenthCheck1 = g4<string>('hello');

interface lengthCheck {
  length: number;
}

function g44<T extends lengthCheck>(x: T) {
  return x.length;
}

let lengthCheck2 = g44('HELLO!!');
// let lengthCheck3 = g44(123); //number 형식에는 length를 사용할 수 없어 에러남
