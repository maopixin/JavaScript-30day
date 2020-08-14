// 十进制整数
var intNum = 10;

// 八进制 首位为0,然后是八进制数字（0-7）如果超过范围 前导0被忽略，解析为十进制
var octalNum1 = 070; // 八进制的56
//var octalNum2 = 079; // 无效的八进制数值 解析为79
var octalNum3 = 08; // 无效的八进制数值 解析为8

// 八进制字面量在严格模式下无效

// 十六进制 0x开头 然后是十六进制数字（0-9,a-f）字母不区分大小写

var hexNum1 = 0xA; // 十六进制的 10
var hexNum2 = 0x1f; // 十六进制的 31


// 浮点数
var floatNum1 = 1.1;
var floatNum2 = 0.1;
var floatNum3 = .1; // 有效 但不推荐

var floatNum4 = 1.; // 解析为1
var floatNum4 = 10.; // 解析为10

// 科学记数法

var floatNum = 3.125e7; // 等于31250000 3.125*10的7次方

// 基于IEEE754的通病，尽量不要使用小数计算。
console.log(0.1 + 0.2 == 0.3); // false


var result = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(isFinite(result)); // false
console.log(1); // true


// NaN

typeof NaN; // nummber

NaN == NaN; // false

isNaN(NaN); // true
isNaN('123'); // false
isNaN('a'); // true
isNaN(null); // false

// Number
// Boolean
Number(true); // 1
Number(false); // 0
// Null
Number(null); // 0
// Number
Number(1); // 1 只做简单的传入传出
// Undefined
Number(undefined); // 0
// String
Number(''); // 0 空字符串转化为0
Number('1') // 1
Number('1.1') // 1.1
Number('0xF') // 15 十六进制
Number('a'); // NaN 不符合数值的全部都是 NaN

// parseInt
// 检测字符串首个非空字符，如果不是数值或者负号(第一个0则忽略)，返回NaN， 直到遇到最后一个不是数值的字符终止
parseInt(''); // NaN (Number会转化为0)
parseInt('a'); // NaN
parseInt('  -10'); // -10
parseInt('  10aaaa111') // 10

parseInt('10', 10); // 第一个参数是要转的值，第二个参数是 基数（多少进制：2 8 10 16）
// 不传第二个参数，则由parseInt 函数自行决定基数
parseInt('070'); // 56 八进制
parseInt('0xA'); // 10 十六进制

// parseFloat
// 与parseInt类似，但是会检测小数点(没有可被解析成整数时返回整数)
parseFloat(''); // NaN (Number会转化为0)
parseFloat('-1.1zz00'); // -1.1
parseFloat('1.000'); // 1
parseFloat('3.125e7'); // 31250000
