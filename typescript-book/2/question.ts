/**
 * 1. 두 커스텀 타입인 Dog와 Fish를 작성한다.
 * 2. 클래스로 선언하고 name 프로퍼티를 추가한다.
 * 3. Dog 클래스는 sayHello():string 메서드를 가지며,
 *    Fish 클래스는 dive(howDeep:number):string 메서드를 가진다.
 * 4. 타입 Pet을 Dog와 Fish의 유니온 타입을 선언한다.
 * 5. talkToPet(pet: Pet): string 함수는 타입 가드를 사용해 Dog 클래스라면 sayHello()를 호출시키고
 *    Fish 클래스에는 "Fish cannot talk, sorry."를 출력하도록 한다.
 * 6. talkToPet()의 파라미터를 Dog, Fish, 그 외의 객체로 총 세번 호출
 */

class Dog {
  constructor(readonly name:string) {
    this.name = name;
  }
  sayHello():string {
    return 'Dog says hello!!';
  }
}
class Fish {
  constructor(readonly name:string) {
    this.name = name;
  }
  dive(howDeep:number):string {
    return `Diving ${howDeep} feet`;
  }
}

type Pet = Dog|Fish;

function talkToPet(pet: Pet):string {
  if (pet instanceof Dog) { //타입 가드
    return pet.sayHello();
  } else if (pet instanceof Fish) {
    return 'Fish cannot talk, sorry';
  }
}

const myDog = new Dog('Sammy'); //Dog의 인스턴스를 만든다.
const myFish = new Fish('Marry'); //Fish의 인스턴스를 만든다.

console.log(talkToPet(myDog)); //talkToPet 함수에 Dog 인스턴스를 전달한다.
console.log(talkToPet(myFish)); //talkToPet 함수에 Fish 인스턴스를 전달한다.
// talkToPet({name: 'John'})// 파라미터 타입이 잘못되어 컴파일되지 않는다.