//옛발 방식의 typescript import, export 방법 (네임스페이스)
/// <reference path="./a.ts" />
import { ObjectFunction } from './b';

const aName: NameSpace.TName = 'name';

const run: ObjectFunction = function (a) {
  console.log(a);
};

run({ ttt: 'ttttttt' });
