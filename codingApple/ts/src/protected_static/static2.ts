class static2 {
  static skill: string = 'ts';
  public subSkill: string = 'css';
  intro = static2.skill + " " + this.subSkill;
}

const me = new static2();
static2.skill = 'python';
me.subSkill = 'scss';
console.log(me);
//static2 { subSkill: 'scss', intro: 'ts css' }

const other = new static2();
console.log(other);
//static2 { subSkill: 'css', intro: 'python css' }