const ord = Symbol('orderID'); // 새 symbol 생성
const myOrder = {
  ord: "123" //객체 프로퍼티로 symbol 사용
};
console.log(myOrder['ord']); //123 출력