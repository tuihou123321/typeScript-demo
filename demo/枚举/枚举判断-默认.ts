/*
* 枚举：
*
* */
enum ButtonType {
    Primary,
    Default
}

function getButton(type){
    if(type===ButtonType.Primary){
        return '高亮按钮'
    }else if(type===ButtonType.Default){
        return '默认按钮'
    }
}


