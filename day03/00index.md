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