### 数据类型

- 基本数据类型 => Undefined、Null、Boolean、Number、String、Symbol（es6新增）
- 复杂数据类型 => Object

##### typeof

使用typeof可以检验变量的数据类型

- 未定义 => 'undefined'
- 布尔值 => 'boolean'
- 字符串 => 'string'
- 数值 => 'number'
- 对象或null => 'object'
- 函数 => 'funciton'

```js
var msg = "hi";
var num = 100;

typeof msg; // string
typeof(msg); // string
typeof num; // number
typeof 'str'; // string
typeof 20; // number

// null 被认为是空对象的引用，所以会'错误的'返回 object
typeof null; // object

```

##### Undefined

Undefined 类型只有一个值，即特殊的undefined，使用var声明变量但不赋值，这个变量就是undefined

```js
var msg;

console.log(msg == undefined); // true

var msg = undefined;

console.log(msg == undefined); // true

```
undefined 与未定义的变量还是有区别的

```js
var msg = undefined;
// 没有定义num
// var num;

console.log(msg); // undefined
console.log(num); // Uncaught ReferenceError: num is not defined 产生错误
```
但是typeof 未定义的变量会返回undefined

```js
typeof num; // undefined
```

##### Null
Null类型同样只有一个值，即特殊的 null。null表示空对象的指针，所以typeof null 会返回object。所以如果一个变量未来准备存储对象的话，就初始化为null。
```js
var obj = null;

obj = { a: 1, b: 2 };
```

##### Boolean

Boolean 类型有两个值 **true** 与 **false**

虽然只有两个值， 但是其他类型的都有等价的值，可以使用函数Boolean()转换

转换规则
| 数据类型 | 转换为true的值 | 转换为false的值 |
| ----- | ----- | ----- | 
| Boolean | true | false|
| String | 任何非空字符串 | "" (空字符串) |
| Number | 任何非0数值 | 0和NaN |
| Object | 任何对象 | null |
| Undefined |  | undefined |

```js
// js 存在隐式转换，在需要布尔值的时候，会转化为布尔值

var msg = "hi";

if(msg) {
	console.log(msg);
}
```

##### Number

使用IEEE754格式来表示

- 整数

```js
// 十进制整数
var intNum = 10;

// 八进制 首位为0,然后是八进制数字（0-7）如果超过范围 前导0被忽略，解析为十进制
var octalNum1 = 070; // 八进制的56
var octalNum2 = 079; // 无效的八进制数值 解析为79
var octalNum3 = 08; // 无效的八进制数值 解析为8

// 八进制字面量在严格模式下无效

// 十六进制 0x开头 然后是十六进制数字（0-9,a-f）字母不区分大小写

var hexNum1 = 0xA; // 十六进制的 10
var hexNum2 = 0x1f; // 十六进制的 31
```

在进行运算时，八进制、十六进制都会转化为十进制进行计算。

- 浮点数

```js
// 浮点数
var floatNum1 = 1.1;
var floatNum2 = 0.1;
var floatNum3 = .1; // 有效 但不推荐

var floatNum4 = 1.; // 解析为1
var floatNum4 = 10.; // 解析为10
```

```js
// 科学记数法

var floatNum = 3.125e7; // 等于31250000 3.125*10的7次方

// 基于IEEE754的通病，尽量不要使用小数计算。
console.log(0.1 + 0.2 == 0.3); // false
```
###### 数值范围

最大值保存在 **Number.MAX_VALUE** 绝大多数浏览器是 **1.7976931348623157e+308**，最小值保存在 **Number.MIN_VALUE** 绝大多数浏览器是 **5e-324**

如果在计算中数值超出了js的数值范围，这个数值会被转化为特殊的 Infinity（正无穷），负值则是-Infinity（负无穷）

注意 Infinity 值无法参与计算

在进行超大数值计算时，可以使用 isFinite 函数测试。在数值范围内的数值返回true；

```js
var result = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(isFinite(result)); // false
console.log(1); // true
```

###### NaN

代表非数值的数值 表示一个需要返回数值的操作返回了非数值
```js
typeof NaN; // number
```
NaN 不等于 NaN, 可以isNaN检测一个数值是否是NaN，如果参数不是Number类型，会尝试转换为数值

```js
NaN == NaN; // false
isNaN(NaN); // true
isNaN('123'); // false
isNaN('a'); // true
isNaN(null); // false
```
###### 数值转换
Number、parseInt、parseFloat

 ```js
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
```

```js
// parseInt
// 检测字符串首个非空字符，如果不是数值或者负号，返回NaN， 直到遇到最后一个不是数值的字符终止
parseInt(''); // NaN (Number会转化为0)
parseInt('a'); // NaN
parseInt('  -10'); // -10
parseInt('  10aaaa111') // 10

parseInt('10', 10); // 第一个参数是要转的值，第二个参数是 基数（多少进制：2 8 10 16）
// 不传第二个参数，则由parseInt 函数自行决定基数
parseInt('070'); // 56 八进制
parseInt('0xA'); // 10 十六进制
```

```js
// parseFloat
// 与parseInt类似，但是会检测小数点(没有可被解析成整数时返回整数)
parseFloat(''); // NaN (Number会转化为0)
parseFloat('-1.1zz00'); // -1.1
parseFloat('1.000'); // 1
parseFloat('3.125e7'); // 31250000
```

##### String

用于表示零到多个Unicode字符组成的字符序列，就是字符串。单引号'' 双引号""是等价的

```js
var name1 = '小红'; // 推荐 因为不需要shift
var name2 = "小蓝";
// 错误写法 要一对引号 "" 或 ''
// var name3 = '小傻";
```
###### 字符字面量

> String数据类型包含一些特殊的字符字面量，也叫转义序列，用于表示非打印字符，或者具有其他用途的字符。这些字符字面量如下表所示

![image.png](https://upload-images.jianshu.io/upload_images/15034420-e1014595a587f863.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```js
// 这些字符字面量可以出现在字符串中的任意位置，而且也将被作为一个字符来解析，如下面的例子所示

var text = "This is the letter sigma: \u03a3.";

console.log(text.length); // => 28

// 这个例子中的变量text有28个字符，其中6个字符长的转义序列表示1个字符。
// 如果字符串中包含双字节字符，那么length属性可能不会精确地返回字符串中的字符数目。
```

###### 转换为字符串

toString()方法 

数值、布尔值、对象和字符串值（字符串也有toString()方法，该方法返回字符串的一个副本）都有toString()方法。但null和undefined值没有这个方法。（在调用数值的toString()方法时，可以传递一个参数：输出数值的基数。）

```js
var num = 16;
console.log(num.toString()); // 16
console.log(num.toString(2)); // 10000
console.log(num.toString(8)); // 20
console.log(num.toString(10)); // 16
console.log(num.toString(16)); // 10
```

String()方法 
- 规则

1. 如果值有toString()方法，则调用该方法（没有参数）并返回相应的结果；
2. 如果值是null，则返回"null"；
3. 如果值是undefined，则返回"undefined"。

```js
// String
var v1 = 10;
var v2 = true;
var v3 = null;
var v4 = undefined;
console.log(String(v1)); // "10"
console.log(String(v2)); // "true"
console.log(String(v3)); // "null"
console.log(String(v4)); // "undefined"
```
```js
// 一样可以转换字符串
var num = 1;
console.log(num + '');
```

##### Object
> ECMAScript中的对象其实就是一组数据和功能的集合。对象可以通过执行new操作符后跟要创建的对象类型的名称来创建。而创建Object类型的实例并为其添加属性和（或）方法，就可以创建自定义对象

```js
var obj = new Object();
var obj1 = new Object; // 可以，不推荐
var obj2 = {};
```

❏ constructor：保存着用于创建当前对象的函数。对于前面的例子而言，构造函数（constructor）就是Object()。

❏ hasOwnProperty(propertyName)：用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在。其中，作为参数的属性名（propertyName）必须以字符串形式指定（例如：o.hasOwnProperty("name")）。

❏ isPrototypeOf(object)：用于检查传入的对象是否是当前对象的原型（第5章将讨论原型）。

❏ propertyIsEnumerable(propertyName)：用于检查给定的属性是否能够使用for-in语句（本章后面将会讨论）来枚举。与hasOwnProperty()方法一样，作为参数的属性名必须以字符串形式指定。

❏ toLocaleString()：返回对象的字符串表示，该字符串与执行环境的地区对应。

❏ toString()：返回对象的字符串表示。❏ valueOf()：返回对象的字符串、数值或布尔值表示。通常与toString()方法的返回值相同。