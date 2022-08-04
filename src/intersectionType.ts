type Employee = {
  year: number;
  name: string;
};

type Admin = {
  name: string;
  adminNum: number;
};

type EmployeeWtihAdmin = Employee & Admin;

//Employee type과 Admint type의 인수가 모두 있어야한다.
let user: EmployeeWtihAdmin = {
  year: 2017,
  name: "john",
  adminNum: 100,
};

type Numeric = number | boolean;
type Combinable = string | number;
type Universal = Numeric & Combinable;

//Universal type은  Numeric과 Combinable을 모두 만족시켜야 하므로 number만 가능하다.
let universal: Universal;

//type gaurd

// Use typeof
function usingTypeof(valueA: Universal, valueB: Universal) {
  if (typeof valueA === "string" || typeof valueB === "string") {
    return valueA.toString() + valueB.toString();
  }
  return valueA + valueB;
}

// Use in  keyword

type UnknownEmployee = Employee | Admin;

function usingIn(employee: UnknownEmployee) {
  //console.log(employee.year); // not access

  //year 속성이 있는것은 Employee이므로 현재 매개변수employee은 Employee타입이 된다.
  if ("year" in employee) {
    console.log(employee.year);
  }
  // 공통 속성인 name으로는 특정 타입인지 유추할 수 없다.
  if ("name" in employee) {
    console.log(employee.year);
  }
}

//Use instanceof

class Train {
  maxUser: number = 500;
  constructor(public trainNumber: number) {}

  printMaxUser() {
    return;
  }
}
class Truck {
  constructor(public truckInfo: string) {}
}

type Vehicle = Train | Truck;

function usingInstanceof(vehicle: Vehicle) {
  //    console.log(vehicle.printMaxUser());
  // not access

  if ("trainNumber" in vehicle) {
    console.log(vehicle.printMaxUser());
  }
  if (vehicle instanceof Train) {
    console.log(vehicle.printMaxUser());
  }
}
