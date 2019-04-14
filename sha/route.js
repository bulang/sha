/**
 * 路由的基础库：扫描controllers并绑定到router对象
 */
const baseCfg = require("../config/base");
/**
 * 绑定路由列表到router对象
 * @param {roter对象} router 
 * @param {路由列表} mapping 
 */
function addMapping(router, mapping) {
    for (let url in mapping) {
        let urlArr = url.split(":");
        if (urlArr[0]=="GET") {
            let path = urlArr[1];
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (urlArr[0]=="POST") {
            let path = urlArr[1];
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}
/**
 * 暴露路由router对象
 */
module.exports = function (file) {
    let route_file = file||"/route.js"
    let router = require('koa-router')();
    let routes = require(baseCfg.ROOT+route_file);
    addMapping(router, routes);
    return router.routes();
};