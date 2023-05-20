type Foot = number;
type Pound = number;

type Patient = { //타입 선언
  name: string,
  height: Foot, //Foot 타입 별칭 사용
  weight?: Pound //Pound 타입 별칭 사용
}

let patient: Patient = { //객체 리터럴 표기법을 사용해 인스턴스를 만들기
  name: 'Joe Smith',
  height: 175,
}