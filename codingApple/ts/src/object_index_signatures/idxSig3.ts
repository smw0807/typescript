interface IObj {
  'font-size': IObj | number;
}
let obj: IObj = {
  'font-size': {
    'font-size': {
      'font-size': 14,
    },
  },
};
