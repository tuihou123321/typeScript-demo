function getLength(value: string | number){
    console.log(value.length);  // 直接打印会报错
    console.log((<string>value).length);  // 使用断言，正常显示
    console.log((value as string).length);  // 使用断言，正常显示

    if(typeof value==='string'){
        return value.length
    }else{
        return String(value).length
    }
}
console.log(getLength(11));
console.log(getLength('abc'));
console.log(getLength([]); // 类型不符报错
