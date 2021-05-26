// 断言在联合


// 使用 (<string>.something).length 来断言
function getLength(something: string | number): number {
    // 使用<>来断言
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}



// 使用as
function getLength3(something: string | number): number {
    // 使用as语法来断言
    if ((something as string).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}

