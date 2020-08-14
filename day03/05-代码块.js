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