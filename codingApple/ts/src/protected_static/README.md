# protected
private과 비슷하나 약간의 차이가 있다.   
protected를 달아놓으면 해당 속성이 있는 class와 etends된 class 안에서만 접근이 가능하다.
```typescript
class protected1 {
  private name: string;
  public number: number;
  protected age: number;
  constructor() {
    this.name = 'minwoo';
    this.number = 1;
    this.age = 32;
  }
}

const p4 = new protected1();
// console.log(p4.age); //protected라 접근안됨

class protected11 extends protected1 {
  private job: string;
  public index: number;
  number = 5;
  // name = 'ss'; //안됨
  number = 2;
  age = 32;
  constructor() {
    super();
    this.job = 'dev';
    this.index = 0;
  }
  run() {
    console.log(this.age); //protected라 여기선 접근됨
  }
}

const p44 = new protected11();
// console.log(p44.age);//protected라 접근안됨

```
class를 여러개 만들고 class 끼리 공유할 수 있는 속성을 만들고 싶으면 protected,   
class 하나 안에서만 쓸 수 있는 속성을 만들고 싶으면 private를 쓰면된다.   
class를 여러개 만들 일이 없으면 쓸모없.

# static
일반적으로 class 안에 만드는 변수, 함수 이런건 전부 class로 부터 새로 생성되는 object(일명 instance)에 부여된다.   
class에 직접 변수나 함수를 부여하고 싶으면 static 키워드를 붙여주면 된다.   
부모 class에 직접 부여됨. (자식에게 안물려줌)   
this로 접근 안됨
   
주로 class 안에 간단한 메모를 하거나, 기본 설정값을 입력하거나, class로 부터 생성되는 object가 사용할 필요가 없는 변수들을 만들어놓고 싶을 때 사용한다.   
접근은 class 명으로 접근
```typescript
class static1 {
  static x: number = 1;
  private static y: number = 2;
  public z: number = 3;

  public sum = static1.x * static1.y * this.z;
  //static.z는 안됨
  //this.x, this.y는 안됨
  constructor() {
    this.z = 5;
  }
  static run() {
    static1.y = 5;
    // this.y = 4;
    console.log(this.y);
    //static 함수라 static 속성에 this로 접근 가능
  }
  run2() {
    static1.x = 5;
    this.z = 5;
    //static 속성에 this로 접근 불가능
  }
}

const s1 = new static1();
console.log(static1.x);
console.log(s1.sum);
static1.run();

```
```typescript
class static2 {
    static skill: string = 'ts';
    public subSkill: string = 'css';
    intro = static2.skill + " " + this.subSkill;
}

const me = new static2();
static2.skill = 'python';
me.subSkill = 'scss';
console.log(me);
//static2 { subSkill: 'scss', intro: 'ts css' }

const other = new static2();
console.log(other);
//static2 { subSkill: 'css', intro: 'python css' }
```