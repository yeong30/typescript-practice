// class Department {
//   //   name: string = "hey..";
//   private employee: string[] = [];
//   private readonly maxEmployee = 10;

//   constructor(public name: string) {}
//   sayHi(this: Department) {
//     console.log("hello we're", this.name);
//   }
//   addEmployee(employe: string) {
//     if (this.employee.length >= this.maxEmployee) {
//       console.log("employee is full!");
//       return;
//     }
//     this.employee.push(employe);
//   }
//   printEmployeeInfo() {
//     console.log("info : ", this.employee);
//   }
// }
// //this를 호출하면 default 매개변수로 객체가 전달됨
// let depart = new Department(" udemy ");
// let departCopy = { sayHi: depart.sayHi };
// depart.sayHi();
// //departCopy.sayHi(); // invalid - departCopy don't have name prorperty.

// //depart.maxEmployee = 5; //typescript error and not working , but javascript not error and work well

// depart.addEmployee("elly");
// depart.addEmployee("john");
// depart.addEmployee("elly");

// // depart.employee[1] = "harry"; //typescript error , but javascript not error
// depart.printEmployeeInfo();

// // 클래스의 상속
// class ITDepartment extends Department {
//   constructor() {
//     super("IT");
//   }
// }
// const it = new ITDepartment();
// it.printEmployeeInfo();
// it.sayHi();

// class AccountingDepartment extends Department {
//   private lastReport: string;
//   constructor(public reports: string[]) {
//     super("Accounting");
//     this.lastReport = reports[0];
//   }
//   //get/set 을 통해 private 프토퍼티에 접근이 가능
//   get mostRecentReport() {
//     if (this.lastReport) return this.lastReport;
//     throw new Error("not exit any report");
//   }
//   set setMostRecentReport(report: string) {
//     this.addReport(report);
//   }
//   addReport(report: string) {
//     this.reports.push(report);
//     this.lastReport = report;
//   }
//   printReport() {
//     console.log(this.reports);
//   }
// }
// const account = new AccountingDepartment([]);
// account.printEmployeeInfo();
// account.sayHi();
// // console.log(account.mostRecentRepost);
// account.addReport("someting is wrong...");
// account.addReport("what happen!");
// account.printReport();
// account.setMostRecentReport = "add reposrt!";
// console.log(account.mostRecentReport); //게터 - 프로퍼티로서 접근.
