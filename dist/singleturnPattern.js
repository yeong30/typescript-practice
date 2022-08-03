"use strict";
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.getInstance = function (name) {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Department(name);
        return this.instance;
    };
    Department.prototype.printInfo = function () {
        console.log("".concat(this.name, " work for ..."));
    };
    return Department;
}());
//const department = new Department(); // not access- constructor method is private
var department = Department.getInstance("accounting"); // create instance by static method.
department.printInfo();
