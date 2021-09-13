/*
* 枚举：
*
* */
enum SystemType {
    Android='安卓系统',
    IOS='苹果系统'
}

function getButton(type){
    if(type===SystemType.Android){
        return '安卓'
    }else if(type===SystemType.IOS){
        return '苹果'
    }
}

console.log(SystemType.Android);




