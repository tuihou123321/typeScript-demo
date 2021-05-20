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
