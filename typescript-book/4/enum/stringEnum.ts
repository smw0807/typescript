//문자열 값으로 enum 멤버 초기화
enum Way {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

function move(where: Way) {
  switch (where) {
    case Way.Up:
      console.log('where : ', Way.Up);
      break;
    case Way.Down:
      console.log('where : ', Way.Down);
      break;
    case Way.Left:
      console.log('where : ', Way.Left);
      break;
    case Way.Right:
      console.log('where : ', Way.Right);
      break;
  }
}

move(Way.Left);
move('North');

//enum 대신 유니온 사용 가능
function UnionMove(Way2: 'Up' | 'Down' | 'Left' | 'Right') {
  switch (Way2) {
    case 'Up':
      console.log('UP!!!');
      break;
  }
}
UnionMove('Up');
UnionMove('North');

//커스텀 타입도 사용 가능
type Way3 = 'Up' | 'Down' | 'Left' | 'Right';
function customMove(direction: Way3) {
  switch (direction) {
    case 'Up':
      console.log('UP');
      break;
  }
}
customMove('Down');
customMove('North');
