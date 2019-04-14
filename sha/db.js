const mysql = require("mysql");
const config = require(__dirname+"/config/base");
// sql 连接池
let pool = mysql.createPool({
    host     : config.database.HOST,
    user     : config.database.USERNAME,
    password : config.database.PASSWORD,
    database : config.database.DATABASE
});
/**
 * 统一执行方法
 * @param {mysql语句} query 
 * @param {参数} value 
 */
let query = function(query,value){
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

module.exports = {
    query
};