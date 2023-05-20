class Product {
  id: number;
}

//조건부 반환 타입을 선언
function getProducts<T>(id?: T): T extends number ? Product : Product[] {
  if (typeof id === 'number') {
    //주어진 파라미터 확인
    return { id: 123 } as any;
  } else {
    return [{ id: 123 }, { id: 567 }] as any;
  }
}

const result1 = getProducts(123); //숫자 타입인 파라미터를 가진 함수를 호출
const result2 = getProducts(); //파라미터가 없는 함수를 호출
