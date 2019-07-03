const Koa = require('koa')
const static = require('koa-static')
let service = new Koa();
service.listen(8888);
service.use(async(ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    await next();
})
service.use(static('./static'))