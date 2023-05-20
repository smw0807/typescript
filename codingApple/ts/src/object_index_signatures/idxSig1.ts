export {};
interface IStringOnly {
  [key: string]: string;
}

interface IStringOnly2 {
  age: string; //됨
  [key: string]: string;
}

interface IStringOnly3 {
  age: number; //안됨 ['age' 형식의 'number' 속성을 'string' 인덱스 유형 'string'에 할당할 수 없습니다.ts(2411)] 에러 출력
  [key: string]: string;
}

interface IStringOnly4 {
  age: number; //됨
  [key: string]: string | number;
}

let obj: IStringOnly = {
  name: 'kim',
  age: '20',
  location: 'seoul',
};
