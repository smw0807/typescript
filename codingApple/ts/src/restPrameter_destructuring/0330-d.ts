type array = (number | string | boolean)[];
function d([a, b, c]: array): void {
  console.log(a, b, c);
}
d([40, 'wine', false]);
