function padLeft(value: string, padding: string|number): string {
  if (typeof padding === 'number') {
    return Array(padding + 1).join('') + value;
  }
  if (typeof padding === 'string') {
    return padding + value;
  }
}
console.log(padLeft('Hello word', 4));
console.log(padLeft('Hello word', 'John says'));
console.log(padLeft('Hello word', true));