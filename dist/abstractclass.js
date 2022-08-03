"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Departments = /** @class */ (function () {
    function Departments(name) {
        this.name = name;
        this.employee = [];
        this.maxEmployee = 10;
    }
    Departments.prototype.addEmployee = function (employe) {
        if (this.employee.length >= this.maxEmployee) {
            console.log("employee is full!");
            return;
        }
        this.employee.push(employe);
    };
    Departments.prototype.printEmployeeInfo = function () {
        console.log("info : ", this.employee);
    };
    return Departments;
}());
var ITDepartments = /** @class */ (function (_super) {
    __extends(ITDepartments, _super);
    function ITDepartments() {
        return _super.call(this, "IT") || this;
    }
    ITDepartments.prototype.getWhatTodo = function () {
        console.log("".concat(this.name, " develop something "));
    };
    return ITDepartments;
}(Departments));
var itde = new ITDepartments();
var AccountingDepartments = /** @class */ (function (_super) {
    __extends(AccountingDepartments, _super);
    function AccountingDepartments(reports) {
        var _this = _super.call(this, "Accounting") || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartments.prototype.printReport = function () {
        console.log(this.reports);
    };
    AccountingDepartments.prototype.getWhatTodo = function () {
        console.log("".concat(this.name, " calc and report  something "));
    };
    return AccountingDepartments;
}(Departments));
//let department = new Departments("udemy"); // not access - 추상클래스는 인스턴스화가 불가능
var itDepartment = new ITDepartments();
var accoutDepartment = new AccountingDepartments([]);
itDepartment.getWhatTodo();
accoutDepartment.getWhatTodo();
