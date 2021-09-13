// 方式一：使用as
window.a=1; // 报错，window上没有a属性
(window as any).a=1; // 正常显示


// 方式二：使用 <类型>值
window.b=1; // 报错，window上没有b属性
(<any>window).b=1; // 正常显示
