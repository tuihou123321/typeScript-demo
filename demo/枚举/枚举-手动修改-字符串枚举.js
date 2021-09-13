/*
* 枚举：
*
* */
var SystemType;
(function (SystemType) {
    SystemType["Android"] = "\u5B89\u5353\u7CFB\u7EDF";
    SystemType["IOS"] = "\u82F9\u679C\u7CFB\u7EDF";
})(SystemType || (SystemType = {}));
function getButton(type) {
    if (type === SystemType.Android) {
        return '安卓';
    }
    else if (type === SystemType.IOS) {
        return '苹果';
    }
}
console.log(SystemType.Android);
