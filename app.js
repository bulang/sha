const koa = require("koa");
const routes = require("./sha/route");
const baseCfg = require("./config/base");
const app = new koa();
app.use(routes());
app.listen(baseCfg.POART);
console.log(app);
console.log("server listening on http://127.0.0.1:"+baseCfg.POART);