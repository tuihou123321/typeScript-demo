
// window全局对象
window.a=10;   // 报错 window 对象定义a 这个属性
(window as any).a=10;   // 使用any断言，正常显示


// 局部变量
const IMSDK={
    // 获取通讯录列表
    getConcact(){
        return [];
    }
}

IMSDK.uid=1;  // 报错
(IMSDK as any).uid=10; // 正常显示
