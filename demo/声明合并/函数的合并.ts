/*
* 声明合并：
* 定义：相同名字的函数、接口、类最后会合并成一个类型；
* */

/*
* 函数的合并
* ---使用函数重载定义多个函数类型
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










