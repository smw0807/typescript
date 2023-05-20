export {};
interface IObj {
  'font-size': number;
  [key: string]: IObj | number;
}
let obj: IObj = {
  'font-size': 10,
  secondary: {
    'font-size': 12,
    third: {
      'font-size': 14,
    },
  },
};
