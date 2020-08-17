var name1 = '小红'; // 推荐 因为不需要shift
var name2 = "小蓝";
// 错误写法 要一对引号 "" 或 ''
// var name3 = '小傻";

// 这些字符字面量可以出现在字符串中的任意位置，而且也将被作为一个字符来解析，如下面的例子所示

var text = "This is the letter sigma: \u03a3.";

console.log(text.length); // => 28

// 这个例子中的变量text有28个字符，其中6个字符长的转义序列表示1个字符。
// 如果字符串中包含双字节字符，那么length属性可能不会精确地返回字符串中的字符数目。

// toString
var num = 16;
console.log(num.toString()); // "16"
console.log(num.toString(2)); // "10000"
console.log(num.toString(8)); // "20"
console.log(num.toString(10)); // "16"
console.log(num.toString(16)); // "10"

// String
var v1 = 10;
var v2 = true;
var v3 = null;
var v4 = undefined;
console.log(String(v1)); // "10"
console.log(String(v2)); // "true"
console.log(String(v3)); // "null"
console.log(String(v4)); // "undefined"