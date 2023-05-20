class Tax{
  constructor(income){
    this.income = income;
  }
  calculateFederalTax(){
    console.log(`Calculating federal tax for income ${this.income}`);
  }
  calcMinTax(){
    console.log("In Tax. Calculating min tax");
    return 123;
  }
}
class NJTax extends Tax{
  constructor(income, stateTaxPercent){
    super(income);  // a must
    this.stateTaxPercent=stateTaxPercent;
  } 
  calculateStateTax(){
    console.log(`Calculating state tax for income ${this.income}`);
  } 
  calcMinTax(){
    let minTax = super.calcMinTax();
    console.log(`In NJTax. Will adjust min tax of ${minTax}`);
  }
}
const theTax = new NJTax(50000, 6);  
theTax.calculateFederalTax();
theTax.calculateStateTax();
theTax.calcMinTax();