interface aPerson {
  firstName: string;
  lastName: string;
  age: number;
}

function savePerson( person: aPerson): void {
  console.log('Saving : ', person);
}

const p = {
  firstName: 'minwoo',
  lastName: 'song',
  age: 31
}

savePerson(p);