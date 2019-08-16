/*
* 内置对象
ECMAScript 标准提供的内置对象有：
Boolean,Error,Date,EegExp等；
* */
var boolean = new Boolean(1);
var error = new Error('has a error');
var date = new Date();
var regExp = /[a-z]/;
/*
* typescript核心库的定义文件
* */
//e被推断成了MouseEvent，而该对象没有的属性就会报错；
document.addEventListener("click", function (e) {
    console.log(e.altKey); //正常的
    console.log(e.targetCurrent); //会报错，应该内置MouseEvent对象,没有这个属性
});
