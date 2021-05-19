// 使用 (<string>.something).length 来断言
function getLength3(something) {
    // 使用as语法来断言
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
