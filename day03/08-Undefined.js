var msg;

console.log(msg == undefined); // true

var msg = undefined;

console.log(msg == undefined); // true

// 不需要显式的赋予 undefined ，不赋值默认就是undefined

var msg = undefined;
// 没有定义num
// var num;

console.log(msg); // undefined
console.log(num); // Uncaught ReferenceError: num is not defined 产生错误

typeof num; // undefined