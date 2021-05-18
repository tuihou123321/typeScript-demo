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


/*
* 接口的合并
* 接口属性合并在一起时，会合并在一个接口
* */
interface UserInfo {
    userName:string;
}
interface UserInfo {
    age:number
}
let userInfo:UserInfo;
userInfo.userName="xm";
userInfo.age=25;
userInfo.id=100000; //报错，interface里面没有这个类型；

interface Header{
    title:string;
    backgroundColor:"white" | "deep";
}

function header(obj:Header){
  return <div>{obj.title}</div>
}

header();






