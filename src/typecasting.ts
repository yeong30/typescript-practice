const inputA = document.querySelector("input")!; // HTMLInputElement type추축가능.
const inputB = document.querySelector("#login-input"); // 구체적 타입 추측 불가능.
const inputC = document.querySelector("#login-input") as HTMLInputElement; // as 혹은 <>을 사용해 형변환

let valueA = inputA.value;
// let valueB = inputB.value; not access
let valueC = inputC.value;
