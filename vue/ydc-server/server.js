const Koa = require('koa');
const Router = require('koa-router');
let server = new Koa();

server.listen(8888)
let router = new Router();
router.use('/api', require('./routers/api'))
server.use(async(ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    await next();
})
server.use(router.routes())