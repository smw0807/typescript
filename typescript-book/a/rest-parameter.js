//ES5와 arguments 객체
function calcTaxES5() {
  console.log(
    "ES5. Calculating tax for customers with the income",
    arguments[0]
  );//첫 번째 요소의 값을 출력.
  //두 번째 요소부터 시작하여 배열을 추출한다.
  var customers = [].slice.call(arguments, 1); 
  customers.forEach(function(customer) {
    console.log("Processing", customer);
  });
}
// calcTaxES5(50000, "Smith", "Johnson", "McMonald");
// calcTaxES5(750000, "Olson", "Clinton");

function calcTaxES6(income, ...customers) {
  console.log(`ES6. Calculation tax for customers with the income ${income}`);
  customers.forEach( (customer) => console.log(`Processing ${customer}`));
}
calcTaxES5(50000, "Smith", "Johnson", "McMonald");
calcTaxES5(750000, "Olson", "Clinton");