interface Person5 {
  name: string;
  age: number;
}

/**
 * Person5 타입을 유지하나,
 * 프로퍼티는 읽기 전용이며
 * 선택사항이다.
 */
//선택 사항인 age 프로퍼티를 제외하고, name 프로퍼티만 초기화
const worker1: Readonly<Partial<Person5>> = { name: 'minwoo' };
worker1.name = 'song'; //이미 초기화 되어 있기 때문에 수정 안됨
worker1.age = 31; //최기화 떄 없기 떄문에 입력 안됨
