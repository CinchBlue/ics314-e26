const sumFor = function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; ++i) {
    sum += list[i];
  }
  return sum;
};

const sumWhile = function sumWhile(list) {
  let i = 0;
  let sum = 0;
  while (i < list.length) {
    sum += list[i];
    ++i;
  }
  return sum;
};

// Uses tail recursion.
const sumRecursion = function sumRecursion(list, memo = 0) {
  if (list.length !== 0) {
    return sumRecursion(list.slice(1), memo + list[0]);
  }
  return memo;
};

const sumTheSimpleWay = function sumTheSimplyWay(list) {
  return _.reduce(list, (memo, item) => memo + item);
};

const testList = [1, 2, 3, 4, 5];
// Answer is 15
console.log(sumFor(testList));
console.log(sumWhile(testList));
console.log(sumRecursion(testList));
console.log(sumTheSimpleWay(testList));
