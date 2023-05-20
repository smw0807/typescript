let 철수쌤 = { subject: 'math' };
let 영희쌤 = { subject: ['science', 'english'] };
let 민수쌤 = { subject: ['science', 'art', 'korean'] };

function run(x: { subject: string | string[] }) {
  if (typeof x.subject === 'string') {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    return 'x';
  }
}
console.log(run(철수쌤));
console.log(run(영희쌤));
console.log(run(민수쌤));
