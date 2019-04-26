const path = require("path");
const BaseConfig = {
    VERSION:"1.0.0",
    POART:3000,
    ROOT:path.join(__dirname,"../"),
    // 数据库配置文件
    DATABASE:{
        DATABASE: 'sha',    //数据库
        USERNAME: 'root',    //用户
        PASSWORD: 'root',     //密码
        PORT: '3306',        //端口
        HOST: '127.0.0.1'     //服务ip地址
    },
    //token 秘钥
    SECRET:"sha 1.0.0"
}

module.exports = BaseConfig;