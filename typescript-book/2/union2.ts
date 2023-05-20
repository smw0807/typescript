//유니온에서 식별자를 사용해 모양 구분하기
interface Rectangle {
  kind: 'rectangle'; //식별자
  width: number;
  height: number;
}
interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape = Rectangle|Circle;

function area(shape: Shape): number {
  switch(shape.kind) {
    case 'rectangle': return shape.height * shape.width;
    case 'circle': return Math.PI * shape.radius ** 2;
  }
}

const a: Shape = {
  kind: 'rectangle',
  width: 200,
  height: 200
}
const myRectangle = area(a);
console.log(myRectangle);

const b: Shape = {
  kind: "circle",
  radius: 30
}
const myCircle = area(b);
console.log(myCircle);