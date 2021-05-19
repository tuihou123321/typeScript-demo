// 泛型中，给变量设置默认类型，只是为了阅读方便，其实代码不会提示报错，本来就是对的
function createArray<T = string>(length:number, value:T):T[]{
    let arr=[];
    for (let i=0; i<length; i++){
        arr.push(value)
    }
    return arr;
}

console.log(createArray(3,'a'));
console.log(createArray(3,0));
