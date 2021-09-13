// 断言在联合
// 使用 (<string>.something).length 来断言
function getLength(something) {
    // 使用<>来断言
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
// 使用as
function getLength3(something) {
    // 使用as语法来断言
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
