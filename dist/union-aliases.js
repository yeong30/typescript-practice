"use strict";
//union type
function add(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    return param1.toString() + param2.toString();
}
add(1, 4);
add("happy", "potter");
var studentA;
studentA = { name: "aemy", age: 15 }; //O
// studentA = { name: "aemy", age: "15" }; //X
