abstract class Departments {
  private employee: string[] = [];
  private readonly maxEmployee = 10;

  constructor(public name: string) {}
  addEmployee(employe: string) {
    if (this.employee.length >= this.maxEmployee) {
      console.log("employee is full!");
      return;
    }
    this.employee.push(employe);
  }
  printEmployeeInfo() {
    console.log("info : ", this.employee);
  }
  abstract getWhatTodo(): void;
}

class ITDepartments extends Departments {
  constructor() {
    super("IT");
  }
  getWhatTodo(): void {
    console.log(`${this.name} develop something `);
  }
}
const itde = new ITDepartments();

class AccountingDepartments extends Departments {
  constructor(public reports: string[]) {
    super("Accounting");
  }

  printReport() {
    console.log(this.reports);
  }

  getWhatTodo(): void {
    console.log(`${this.name} calc and report  something `);
  }
}

//let department = new Departments("udemy"); // not access - 추상클래스는 인스턴스화가 불가능

let itDepartment = new ITDepartments();
let accoutDepartment = new AccountingDepartments([]);

itDepartment.getWhatTodo();
accoutDepartment.getWhatTodo();
