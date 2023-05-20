const printMsg = <T>(content: T): T => {
  console.log(content);
  return content;
};

const hi = printMsg('hello');
const hi2 = printMsg<string>('hello2222');

class Console {
  constructor(public message: string) {}
}

const c = printMsg(new Console('hihihihihihihihihi'));
const d = printMsg<Console>(new Console('hihihihihihihihihi'));
