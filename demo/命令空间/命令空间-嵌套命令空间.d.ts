/*
* 使用：
*  1. 解决重名问题
* */

namespace TableNested {
    // 嵌套命令空间
    export namespace Colums  {
        export interface ColumsChild1 {
            title:string
        }
    }
    export interface Colums2  {
        title:string
    }

    interface Colums3  {
        title:string
    }
}


