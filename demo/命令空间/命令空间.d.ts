/*
* 使用：
*  1. 解决重名问题
* */

namespace Table {
    export type Colums = {
        title:string
    }
    export interface Colums2  {
        title:string

    }
    export class Colums3 {
        title:string
    }

    // 虽然没有导出，ide也能提示，但是不规范
    type Colums10 = {
        title:string
    }

}


namespace SomeNameSpaceName {
    export interface ISomeInterfaceName {
        title:string
    }
    export class SomeClassName {
        title:string
    }
}


