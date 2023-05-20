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
