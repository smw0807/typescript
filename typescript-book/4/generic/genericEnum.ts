//string 열거 타입 선언
enum UserRole {
  Administractor = 'admin',
  Manager = 'manager',
}

//커스텀 타입 User 선언
interface User {
  name: string;
  role: UserRole;
}

//제네릭 함수 선언
function loadUser<T>(): T {
  return JSON.parse(`{ "name": "john", "role": "admin" }`);
}

//상세 타입 User로 제네릭 함수를 호출
const user = loadUser<User>();

//문자열 열거 타입으로 사용자 역할을 바꾼다.
switch (user.role) {
  case UserRole.Administractor:
    console.log('Show control panel');
    break;
  case UserRole.Manager:
    console.log('Hide control panel');
    break;
}
