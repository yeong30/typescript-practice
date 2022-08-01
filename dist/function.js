"use strict";
//function type
function addNumber(n1, n2) {
    return n1 + n2;
}
function logNumber(num) {
    console.log(num);
}
var copyFunc;
copyFunc = addNumber; //O
// copyFunc = logNumber; // X
console.log(copyFunc(1, 2));
function addHandler(n1, n2, cb) {
    var result = n1 + n2;
    console.log("hey>", cb(result));
}
addHandler(10, 2, function (number) { return number; });
