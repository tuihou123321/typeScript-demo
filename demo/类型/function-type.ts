// 用接口形式定义函数
type Add = (a:number, b:number ) => number;

let add:Add = function(a,b){
    return a+b;
}
add(1,2);  //正确显示
add(1);  //报错，缺少参数


