const mysql = require("mysql");
const config = require(__dirname+"/config/base");
// sql 连接池
let pool = mysql.createPool({
    host     : config.DATABASE.HOST,
    user     : config.DATABASE.USERNAME,
    password : config.DATABASE.PASSWORD,
    database : config.DATABASE.DATABASE
});

class MysqlUtil {
    constructor(){
        this.sqlStatement = "";
    }
    /**
     * 统一执行方法
     * @param {mysql语句} query 
     * @param {参数} value 
     */
    query(query,value){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,conn)=>{
                if(err){
                    resolve(err);
                }else{
                    conn.query(query,value,(err,result)=>{
                        if(err){
                            reject(err);
                        }else{
                            resolve(result);
                        }
                        conn.release();
                    });
                }
            });
        });
    }
    /**
     * 设置数据表
     */
    table(table){
        
    }
}
module.exports = {
    MysqlUtil
};