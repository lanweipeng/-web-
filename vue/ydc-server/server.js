const Koa = require('koa');
const Router = require('koa-router');
const mysql = require('mysql');
const co = require('co-mysql');
const body = require('koa-better-body')
let conn = mysql.createPool({ host: 'localhost', user: 'root', password: '123456', database: 'ydc' });

let server = new Koa();

server.listen(8888)
let obj = body({ uploadDir: 'upload' })
server.use(obj)
server.context.db = co(conn)
let router = new Router();
router.use('/api', require('./routers/api'))
server.use(async(ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    await next();
})
server.use(router.routes())