//union type

function add(param1: number | string, param2: number | string) {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  }
  return param1.toString() + param2.toString();
}

add(1, 4);
add("happy", "potter");

//aliases

type Student = { name: string; age: number };

let studentA: Student;
studentA = { name: "aemy", age: 15 }; //O
// studentA = { name: "aemy", age: "15" }; //X
