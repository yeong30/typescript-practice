"use strict";
//tuple
var person = {
    name: "john",
    age: 30,
    addr: ["yongs-street", 19],
};
//person.addr = ["lodeo", "zero"]; - not access
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["VISITOR"] = 2] = "VISITOR";
})(Role || (Role = {}));
//enum
person.admin = Role.ADMIN;
if (person.admin === Role.ADMIN) {
    console.log("hello! admin");
}
