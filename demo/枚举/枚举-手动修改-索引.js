var SystemType;
(function (SystemType) {
    SystemType[SystemType["window"] = 1] = "window";
    SystemType[SystemType["linux"] = 2] = "linux";
    SystemType[SystemType["macos"] = 3] = "macos";
})(SystemType || (SystemType = {}));
console.log(SystemType[2]); // 输出 linux
