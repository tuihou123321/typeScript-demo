// window全局对象
window.a = 10; // 报错 window 对象定义a 这个属性
window.a = 10; // 使用any断言，正常显示
var IMSDK = {
    // 获取通讯录列表
    getConcact: function () {
        return [];
    }
};
IMSDK.uid = 1; // 报错
IMSDK.uid = 10; // 正常显示
