var message;

var message = "hi"; // 全局变量
function fn() {
    var num = 1; // 局部变量,在函数执行时被定义，函数执行完被销毁
    // 不使用var关键字定义的是全局变量，在函数执行完不会被销毁，尽量不要这样使用
    // 会导致程序变的极难维护，在严格模式下会导致错误
    str = "str";
}

fn();

console.log(num); // 错误
console.log(str); // => str

var num = 1,
    str = "str",
    message="hi",
    something;