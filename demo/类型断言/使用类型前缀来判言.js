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
