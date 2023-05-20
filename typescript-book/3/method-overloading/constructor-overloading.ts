class Product {
  id: number;
  description: string;
  //생성자 선언 내 파라미터가 없음
  constructor();
  //생성자 선언 내 한 개의 파라미터가 있음
  constructor(id: number);
  //생성자 선언 내 두 개의 파라미터가 있음
  constructor(id: number, description: string);
  constructor(id?: number, description?: string) {
    //생성자 구현 --> 모든 가능한 파라미터를 다루는 생성자 구현
  }
}
