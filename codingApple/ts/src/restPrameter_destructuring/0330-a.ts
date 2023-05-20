interface IStudent {
  student: boolean;
  age: number;
}
let person = { student: true, age: 20 };

function 함수({ student, age }: IStudent) {
  console.log(student, age);
}
함수({ student: true, age: 20 });
