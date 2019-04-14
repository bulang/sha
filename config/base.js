const path = require("path");
const BaseConfig = {
    POART:3000,
    ROOT:path.join(__dirname,"../"),
    // 数据库配置文件
    database:{
        DATABASE: 'sha',    //数据库
        USERNAME: 'root',    //用户
        PASSWORD: 'root',     //密码
        PORT: '3306',        //端口
        HOST: '127.0.0.1'     //服务ip地址
    }
}

module.exports = BaseConfig;