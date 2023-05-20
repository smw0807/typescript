function calcTax(state: string, income: number, dependents: number): number|undefined {
  let result = 0;
  if (state == 'NY') {
    result = income * 0.06 - dependents * 500;
  } else if (state == 'NJ') {
    result = income * 0.05 - dependents * 300;
  }
  return result;
}
const myTax = calcTax('NJ', 50000, 'two'); //에러 표기됨
const myTax2 = calcTax('NY', 50000, 2);
