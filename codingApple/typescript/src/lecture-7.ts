//type alias or 타입 변수
type Aniaml = string | number | undefined;
let 동물: Aniaml = '동물';

/**
 * 일반적으로 타입변수를 만들 때 변수명의 시작은 대문자로 한다.(파스칼케이스)
 * 일반 자바스크립트 변수랑 차별을 두기위해 끝에 Type을 붙여 작명하기도 한다.
 */
type AnimalType = { name: string; age: number };
let animal: AnimalType = {
  name: 'kim',
  age: 20,
};

/**
 * const 변수는 objec 안의 자료 수정은 막지 못한다.
 * 타입스크립트에서는 readonly를 이용해서 막을 수 있다.
 */
type NameType = { readonly name: string };
const myNameIs: NameType = {
  name: 'minwoo',
};
// readonly라 수정 불가능 에러 메세지 발생함.
// myNameIs.name = 'song';

/**
 * 타입 합치기
 */
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };

//object 타입 extend 하기
type Position = PositionX & PositionY;
const position: Position = {
  x: 100,
  y: 100,
};

/**
 * 같은 이름의 type 변수는 재정의가 불가능하다.
 */
// type aa = string;
// type aa = number;

// ######## 문제 1 ##########
//object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
type Obj1 = { name: string; age: number };
type Obj2 = { name: string; job: string };
type Obj = Obj1 & Obj2;
const me: Obj = {
  name: 'minwoo',
  age: 32,
  job: 'developer',
};
// 같은 속성이 같은 타입이면 덮어 씌우는 것 같지만 타입이 다르면 에러가 뜸 never?

// ######## 문제 2 ##########
/**
 다음 조건을 만족하는 타입을 만들어봅시다. 
 1. 이 타입은 object 자료형이어야합니다.
 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
 type alias로 만들어보셈 
 */
type ColorType = {
  color?: string;
  size: number;
  readonly position: number[];
};
const color: ColorType = {
  color: '#999',
  size: 100,
  position: [5, 30],
};

// ######## 문제 3 ##########
/*
다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 
*/
type Info = {
  name: string;
  phone: number;
  email: string;
};
// ######## 문제 4 ##########
/*
다음을 만족하는 type alias를 만들어보십시오.
1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.
*/
type User = {
  name: string;
  age: number;
  email: string;
};
type Adult = { isAdult: boolean };
type UserType = User & Adult;
const user: UserType = {
  name: 'min',
  age: 32,
  email: 'google@gamil.com',
  isAdult: true,
};
