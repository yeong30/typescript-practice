"use strict";
// const student1: Students = {
//     age:15;
//     name : "cindy",
//     class: "A-14"
// };
var Students = /** @class */ (function () {
    function Students(age, name, addr) {
        this.age = age;
        this.name = name;
        this.addr = addr;
    }
    Students.prototype.changeAddr = function (addr) {
        this.addr = addr;
    };
    Students.prototype.printInfo = function () {
        console.log("".concat(this.name, " live in ").concat(this.addr, " and is ").concat(this.age, " years old"));
    };
    return Students;
}());
var student1 = new Students(15, "Elly", "seoul");
student1.printInfo();
student1.changeAddr("busan");
student1.printInfo();
student1.addr = "japan"; // not access - addr is readonly
student1.printInfo();
