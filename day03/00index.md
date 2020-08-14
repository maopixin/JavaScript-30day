## 语法

###  区分大小写 

js中的一切（变量、函数名、操作符）都是区分大小写的。
例如变量test与变量Test是两个不同的变量。
函数名不能使用typeof（关键字），但是可以使用typeOf

### 标识符

指变量、函数、属性的名字，或者函数的参数。命名规则如下
1. 第一个字符必须是字母、下划线（_）、美元符号（$）
2. 其他字符可以是数字、字符、下划线（_）、美元符号（$）

```js
// 例如
var num, _num, $num, num1, n_$1;
// 另外推荐小驼峰写法，首字母小写，剩下的每个单词的首字母大写
var maxSize, toDoSomething;
// 不能把关键字，保留字，true，false ，和null用作标识符，
// 以下是错误写法
// var function, do, true, false, null;
```
### 注释

```js
// 单行注释以两个//开头

/*
 * 多行注释以/*开头
 * 以* /结尾(中间没有空格，去掉就是结尾了)
 * 中间的星号不是必须的，但是整齐、美观
 * 所以一般都会加
 */
```
### 严格模式
es5引入了严格模式， 某些不安全的写法将会被禁止
1. 整个脚本启用，在文件顶部加入
```js
'use strict';
```

2. 函数内部启用
```js
function fn() {
  'use strict';

}
```
### 语句
js中的语法以分号（半角;）结尾，如果省略分号，则由解析器确定结尾

```js
var sum = a + b // 有效但是不推荐

var diff = a - b; // 非常正确，大力推荐
```
因为在实际开发中，代码会被压缩，可能会导致没有分号结尾，被错误的解析，所以即使可以省略，也要在结尾加上分号。

代码块以 **{** 开头， 以 **}** 结尾，例如

```js
if(true) {
	var a = 1;
	var b = 2;
	alert( a + b );
}

// 虽然在多条语句时，才建议使用代码块，但是在if中，一条语句尽量也使用代码块

if(true) console.log('正确'); // 有效，但是可能会导致解析错误

if(true) {
	console.log('正确');
}
```

### 关键字 保留字

1. 关键字 *代表es6新增

用于控制语句的开始或者结束，或者用于执行特定的操作符，不能用作标识符。

|   |  |    |  | 
|  ----  | ----  | ----  | ----  |
|  break   | do  |  instanceof   | typeof  | 
| case  | else | new  | var |
| catch  | finally | return  | viod |
| continue  | for | switch  | while |
| debugger  | function | this  | with |
| default  | if | throw  | delete |
| in  | try | let * | const *  |  
| export | super | class| import |
| yield | | | |


2. 保留字 

虽然现在没用处，但是是以后可能会被用作关键字，比如es6新增的 **let** 与 **const** 本来是保留字，现在已经变成了关键字。
|   |  |    |  | 
|  ----  | ----  | ----  | ----  |
|  abstract   | enum  |  int   | short  | 
| boolean  | double | interface  | static |
| byte  | extends | long  | public |
| char  | final | native  | synchroized |
|  volatile | float | package  | throws |
| goto  | private | transient  | implement |
| protected | | | |

### 变量

js的变量是松散类型（弱类型）的，也就是说变量可以保存任何类型的数据，并且随便切换，定义变量使用 **var** 操作符（var是关键字），后面跟上变量名
```js
var message;
```
上面的代码只定义了变量，但是没有赋值，它可以用来存储任何值，如果不初始化，则message 等于 undefined；

```js
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
```

可以使用一条语句定义多个变量，使用逗号,分隔
```js
var num = 1,
    str = "str",
    message="hi",
    something;
```

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
```