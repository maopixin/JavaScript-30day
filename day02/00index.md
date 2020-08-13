## <script>元素
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script>
		console.log('我是script标签')
	</script>
</head>
<body>
	
</body>
</html>
```
script标签有6个属性

- async 可选 表示立即下载脚本，并且不阻塞其他资源加载，只对外部资源有效
- charset 可选 表示通过**src**属性指定的代码的字符集（没用=没人用并且浏览器会忽略）
- defer 可选 表示脚本延迟到文档完全解析和显示以后再执行，只对外部资源有效
- language 已废弃 用于表示编写代码所用的语言（例如JavaScript，JavaScript1.2，VBScript）
- src 可选 表示包含要执行代码的外部文件
- type 可选 可以看成language的替代属性 表示内容类型

说**async**与**defer**之前
先说一下html的解析机制，写在head里面的script的标签，下载完成后会立即执行，js在下载与执行时会阻塞浏览器渲染，async与defer 就解决了这点，下载与后续文档解析（非js解析）并行，async在下载完成以后立即执行，defer则等待所有元素解析完成之后，DOMContentLoaded事件触发之前执行

![image.png](https://upload-images.jianshu.io/upload_images/15034420-b9b2ec365c49cce9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

绿色代表html解析，蓝色代表script文件下载，红色代表script文件执行

1. js执行与文档渲染是不可能同时执行的，js执行肯定会阻塞文档渲染，也就是说异步只在下载过程
2. async 在下载完成后会立即执行，下面代码中的2.js大概率（2.js较小，网速不是突破光速的话，应该是2.js先完成下载）会先于1.js先执行，所以不能控制执行顺序，而defer是按照顺序执行的
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<!-- 1.js 2MB 2.js 1KB -->
	<script src="https://www.xxx.com/1.js" async></script>
	<script src="https://www.xxx.com/2.js" async></script>
</head>
<body>
	
</body>
</html>
```
3. 在实际应用中，先于文档解析的放head标签里面，比如移动端rem适配，放在</body>之后可能会造成页面闪动，其他js全部放</body>之后加载。

### 嵌入代码与外部文件

实际使用中不建议使用嵌入代码，外部文件有如下好处

- 可维护性 （有时可能涉及多个页面依赖同一段js代码，独立成文件有利于维护）
- 可缓存 
- 适应未来 

## <noscript>元素

在不支持js（浏览器本身不支持或者浏览器本身支持但用户禁止加载js）的浏览器上显示替代的内容
其可以包含所有（script标签除外）能出现在<body>标签内的任何HTML元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Document</title>
</head>
<body>
	<noscript>
		<p>
			本页面需要浏览器启用（支持）javascript
		</p>
	</noscript>
</body>
</html>
```
  
