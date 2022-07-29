//function type

function addNumber(n1: number, n2: number): number {
  return n1 + n2;
}

function logNumber(num: number) {
  console.log(num);
}
let copyFunc: (a: number, b: number) => number;
copyFunc = addNumber; //O
// copyFunc = logNumber; // X

console.log(copyFunc(1, 2));

function addHandler(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  console.log("hey>", cb(result));
}

addHandler(10, 2, (number) => number);
