# JavaScript简介

> Javascript诞生于1995年，当时，它的主要目的是处理以前由服务器端语言(如Perl)负责的一些输入验证操作。在 Javascript问世之前，必须把表单数据发送到服务器端才能确定用户是否没有填写某个必填域，是否输入了无效的值。 Netscape Navigator希望通过 javascript来解决这个问题。在人们普遍使用电话拔号上网的年代，能够在客户端完成一些基本的验证任务绝对是令人兴奋的。毕竟拨号上网的速度之慢，导致了与服务器的每一次数据交换事实上都成了对人们耐心的一次考验。

> 自此以后， Javascript逐渐成为市面上常见浏览器必备的一项特色功能。如今， Javascript的用途早已不再局限于简单的数据验证，而是具备了与浏览器窗口及其内容等几乎所有方面交互的能力。今天的Javascript已经成为一门功能全面的编程语言，能够处理复杂的计算和交互，拥有了闭包、置名(lambda拉姆达)函数，甚至元编程等特性。作为Web的一个重要组成部分，Javascrip的重要性是不言而喻的就连手机浏览器，甚至那些专为残障人士设计的浏览器等非常规浏览器都支持它。当然，微软的例子更典型。虽然有自己的客户端本语言 VBscript，但微软仍然在 Internet Explorer的早期版本中加入了自己的 Javascript（JScript）实现。

 > Javascript从一个简单的输入验证器发展成为一门强大的编程语言，完全出乎人们的意料。应该说，它既是一门非常简单的语言，又是一门非常复杂的语言。说它简单，是因为学会使用它只需片刻功夫，说它复杂是因为要真正掌握它则需要数年时间。要想全面理解和掌握 javascript，关键在于弄清楚它的本质、历史和局限性。

以上摘抄自红宝书第一章部分内容

## JavaScript实现

JavaScript（以后简称js，全称字母太多）由下面三个部分组成

- 核心（ECMAScript）
- 文档对象模型（DOM）
- 浏览器对象模型（BOM）

### ECMAScript

> **ECMAScript**是一种由[Ecma国际](https://baike.baidu.com/item/Ecma%E5%9B%BD%E9%99%85)（前身为[欧洲计算机制造商协会](https://baike.baidu.com/item/%E6%AC%A7%E6%B4%B2%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%88%B6%E9%80%A0%E5%95%86%E5%8D%8F%E4%BC%9A/2052072)，European Computer Manufacturers Association）通过ECMA-262标准化的脚本[程序设计语言](https://baike.baidu.com/item/%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E8%AF%AD%E8%A8%80)。这种语言在[万维网](https://baike.baidu.com/item/%E4%B8%87%E7%BB%B4%E7%BD%91)上应用广泛，它往往被称为[JavaScript](https://baike.baidu.com/item/JavaScript)或[JScript](https://baike.baidu.com/item/JScript)，所以它可以理解为是JavaScript的一个标准,但实际上后两者是ECMA-262标准的实现和扩展。

- 语法
- 类型
- 语句
- 关键字
- 保留字
- 操作符
- 对象

### DOM

> 文档对象模型（DOM，Document Object Model）是针对XML但经过扩展用于HTML的应用程序编程接口（API，Application Programming Interface）。DOM把整个页面映射为一个多层节点解构。HTML或XML页面中的每个组成部分都是某种类型的节点，这些节点又包含着不同类型的数据。

```html
<!DOCTYPE html>
<html lang="en">
	 <head>
		<title>Document</title>
	</head>
	<body>
	 	<p>段落</p>
	</body>
</html>
```

### BOM

> 浏览器对象模型（BOM, Browser Object Model）。将整个浏览器看作是一个对象。js中所有成员变量、成员方法都是浏览器对象的属性和方法。所有的其他对象都是浏览器对象子对象

## 小节

> js是一种专门为网页交互而设计的脚本语言，由下列三个不同的部分组成
- ECMAScript，由ECMA-262定义，提供核心语言功能
- 文档对象模型（DOM），提供访问和操作网页内容的方法和接口
- 浏览器对象模型（BOM）,提供与浏览器交互的方法和接口