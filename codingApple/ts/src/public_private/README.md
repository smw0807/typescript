# public과 private 키워드

타입스크립트는 class 안에 public 키워드와 private 키워드를 사용할 수 있다.

## public 키워드

원하는 속성 왼쪽에 붙이면 그 속성은 아무데서나 수정이 가능하다.

```typescript
class User {
  public name: string;

  constructor() {
    this.name = 'song';
  }
}

const user1 = new User();
user1.name = 'min';
```

안붙여도 되긴함  
입력하지 않아도 자동으로 할당됨

## private 키워드

private 키워드를 붙이면 수정이 불가능해진다.  
무조건 해당 class 안에서만 수정 및 사용이 가능하다.  
class로 부터 생산된 자식 object에서도 private이 붙은건 사용이 불가능하다.

```typescript
class User2 {
  public name: string;
  private familyName: string;

  constructor() {
    this.name = 'song';
    let hello = this.familyName + ' hello';
  }
}

let user2 = new User2();
user2.name = 'min';
user2.familyName = 'song'; //error
```

#을 붙여도 private 속성이 된다.

## private이 부여된 속성을 class 밖에서 수정해야할 경우.

private이 부여된 속성을 수정하는 함수를 class 내부에 만들고 해당 함수를 실행시키면됨.

```typescript
class User3 {
  public name: string;
  private job: string;

  constructor() {
    this.name = 'minwoo';
    this.job = 'developer';
    let hello = `Hello ${this.job} ${this.name}.`;
    console.log(hello);
  }

  changeJob() {
    this.job = 'tester';
  }
}

let user3 = new User3();
user3.name = 'Minwoo, Song';
user3.changeJob();
console.log(user3);
```

# public, private 키워드를 쓰면 이런 것도 가능

constructor 안에서 `this.name = name;` 이런걸 생략 가능

```typescript
class Person {
  name;
  constructor(name: string) {
    this.name = name;
  }
}
let 사람1 = new Person('john');

class Person {
  constructor(public name: string) {}
}
let 사람1 = new Person('john');
```

```typescript
class User4 {
  constructor(public name: string, private job: string) {}

  // job 값을 가져오는 getter 메서드
  getJob(): string {
    return this.job;
  }

  // job 값을 설정하는 setter 메서드
  setJob(newJob: string): void {
    this.job = newJob;
  }
}

const user = new User4('John Doe', 'Developer');

// job 값을 얻기 위해 getter 메서드 사용
console.log(user.getJob()); // 'Developer'

// job 값을 변경하기 위해 setter 메서드 사용
user.setJob('Manager');
console.log(user.getJob()); // 'Manager'
```
