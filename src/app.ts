let test = 10;
let promise = new Promise(async (res, rej) => {
  await wait();
  res("hey...");
});

function countNumber(...numbers: number[]) {
  return numbers.reduce((curr, next) => curr + next, 0);
}
async function wait() {
  setTimeout(() => {
    return 1;
  }, 10);
}
let total = countNumber(1, 2, 3, 4);
let map = new Map();
