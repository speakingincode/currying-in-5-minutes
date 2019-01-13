// Your typical example of currying
import {curry} from 'ramda';

function add(x: number, y: number): number {
  return x + y;
}

const addCurried = curry(add);

console.log(addCurried(1)(1)); // 2

const addFive = addCurried(5);
console.log(addFive(10)); // 15
