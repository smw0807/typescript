export {};
interface IStringOnly {
  [key: number]: string;
}

let obj: IStringOnly = {
  0: 'song',
  1: '20',
  3: 'seoul',
};

let arr: IStringOnly[] = [{ 0: 'aa' }, { 1: 'bb' }, { 2: 'cc' }];
