let people = {
  name: "john",
  age: 15,
};
let classInfo = {
  classNumber: 1022,
  floor: 10,
};

function merge(people: object, classInfo: object) {
  return Object.assign(people, classInfo);
}

const studentInfo = merge(people, classInfo);

studentInfo.classNumber; // not access , merge implicit returntype is object

//is too long
function merge2(
  people: { name: string; age: number },
  classInfo: { classNumber: number; floor: number }
) {
  return Object.assign(people, classInfo);
}
const studentInfo2 = merge2(people, classInfo); //access, but this way is too long

//함수 실행시 각각의 매개변수의 타입이추론되어 최종적으로 반환되는 객체의 타입 추론이 가능.
function merge3<T, U>(people: T, classInfo: U) {
  return Object.assign(people, classInfo);
}

//매개변수 타입에 제약조건 추가
function merge4<T extends object, U extends object>(people: T, classInfo: U) {
  return Object.assign(people, classInfo);
}

function findValue<U, T extends keyof U>(obj: U, key: T) {
  return obj[key];
}
findValue({ name: "hey" }, "name");
