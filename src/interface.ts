interface Person {
  age: number;
  name: string;
  readonly addr: string;
  changeAddr: (addr: string) => void;
  printInfo: () => void;
}

// const student1: Students = {
//     age:15;
//     name : "cindy",
//     class: "A-14"
// };

class Students implements Person {
  addr: string;
  constructor(public age: number, public name: string, addr: string) {
    this.addr = addr;
  }
  changeAddr(addr: string) {
    this.addr = addr;
  }
  printInfo() {
    console.log(
      `${this.name} live in ${this.addr} and is ${this.age} years old`
    );
  }
}

let student1: Person = new Students(15, "Elly", "seoul");
student1.printInfo();
student1.changeAddr("busan");
student1.printInfo();
student1.addr = "japan"; // not access - addr is readonly
student1.printInfo();
