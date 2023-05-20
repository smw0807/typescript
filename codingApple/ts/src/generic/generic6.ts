function map<T, U>(array: Array<T>, callback: (arg: T) => U): Array<U> {
  return array.map(callback);
}

const stringArray: Array<string> = ['hello', 'world'];
const numberArray: Array<number> = [1, 2, 3];

const mappedStringArray: Array<number> = map(stringArray, str => str.length);
console.log(mappedStringArray);
const mappedNumberArray: Array<string> = map(numberArray, num => String(num));
console.log(mappedNumberArray);
