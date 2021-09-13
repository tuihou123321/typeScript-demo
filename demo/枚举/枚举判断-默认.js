/*
* 枚举：
*
* */
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["Primary"] = 0] = "Primary";
    ButtonType[ButtonType["Default"] = 1] = "Default";
})(ButtonType || (ButtonType = {}));
function getButton(type) {
    if (type === ButtonType.Primary) {
        return '高亮按钮';
    }
    else if (type === ButtonType.Default) {
        return '默认按钮';
    }
}
