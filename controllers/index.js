class Index {
    constructor(){
        
    }
    /**
     * 首页
     * @param {上下文} ctx 
     * @param {移交执行权} next 
     */
    async fn_index (ctx,next){
        ctx.response.body = "<h1>hello sha</h1>";
    }
}
module.exports = Index;