type ErrorContainer = {
  [key: string]: string;
};

const inputError: ErrorContainer = {
  email: "email has error!",
  name: "name has error!",
  1: "number transform to string",
};

let fetchUserData = {
  id: "a",
  name: "V",
};

console.log(fetchUserData.job);
console.log(fetchUserData?.job);

let tester = "";
//null 병합연산자
const result = tester ?? "DEFAULT";
console.log(result);

function size(inputValue: string | object) {
  if (inputValue instanceof Object) {
    return console.log("This is Object!");
  }
  return console.log("This is not! Object");
}

size("Het..");
