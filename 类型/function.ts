/*
* 函数类型的定义
* */

//为函数设置返回值
function getUserName():string{
    return 1;
}

//不需要返回值
function startLogin():void{
    return 10;
}

function isVersion(currentVersion?:string,oldVersion?:string):boolean{
    return true;
}
isVersion("2.12.11","2.12.00")
isVersion();

//可选参数一定要写在必选参数的后面
//要有可选参数的时候，要在方法体内处理可选参数没传的情况
function getLength(a:string,b?:string,c:number=1){
    return a.length+(b ? b.length : 0)+1;
}
getLength("hello");


function getString(value:string | number){
    return value.toString;
}

//只能访问联合属性的共同方法；
function getValueLength(value:string | number){
    return value.length; //报错，
}

/*
* 函数重载：一个函数接受不同数量或者类型的参数时，作出不同的处理；
* 联合类型，
* */

/*
* 下面的方法，不能准确的表达，
* 输入为number 输出为number
* */
function reverse(x:number | string):number | string{
    if(typeof x==="number"){
        return Number(x.toString().split("").reverse().join(""));
    }else if(typeof x==="string"){
        return x.split("").reverse().join("");
    }
}
console.log(reverse(123),typeof reverse(123));

/*
* 改写：
* 多交定义了reverse2,前面是函数定义，最后一次是函数实现；
* ts会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要把精确的定义写在前面；
* */
function reverse2(x:number):number;
function reverse2(x:string):string;
function reverse2(x:number | string):number | string{
    if(typeof x==="number"){
        return Number(x.toString().split("").reverse().join(""));
    }else if(typeof x==="string"){
        return x.split("").reverse().join("");
    }
}
console.log(reverse2(123));
