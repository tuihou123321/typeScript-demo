// 使用 (<string>.something).length 来断言
function getLength(something: string | number): number {
    // 使用<>来断言
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}
