var msg = "hi";
var num = 100;

typeof msg; // string
typeof(msg); // string
typeof num; // number
typeof 'str'; // string
typeof 20; // number

// null 被认为是空对象的引用，所以会'错误的'返回 object
typeof null; // object
