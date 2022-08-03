class Department {
  private static instance: Department;

  private constructor(public name: string) {}

  static getInstance(name: string) {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new Department(name);
    return this.instance;
  }

  printInfo() {
    console.log(`${this.name} work for ...`);
  }
}

//const department = new Department(); // not access- constructor method is private
const department = Department.getInstance("accounting"); // create instance by static method.
department.printInfo();
