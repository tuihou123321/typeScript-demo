type GetLength = (value:string) => string;
type GetLength = (value: number) => string;

const getLength: GetLength = function (value){
    return String(value).length
}

getLength(1); // 正常显示
getLength('a'); // 正常显示
