import { createHash } from 'crypto';

const hash = createHash('sha256');

let txt = '4June 4 15:30Simon refunded AI $200';

const makeHash = hash.update(txt).digest('hex');
console.log(makeHash);
//6a0d070cd6d414c8768d94fbc21f2239045abd4c7c3cafe5bee55a77903345c7

let nonce = 0;
const run = (txt: string): string => {
  const hashValue = createHash('sha256').update(txt).digest('hex');
  if (hashValue.substring(0, 4) === '0000') {
    return hashValue;
  }
  nonce++;
  return run(txt + nonce);
};

console.time('run');
const madeHash = run(txt);
console.log(madeHash);
console.timeEnd('run');
