const Koa = require('koa')
const json = require('koa-json')
const logger = require('koa-logger')//打印日志
const koaRouter = require('koa-router')//路由
const koaBodyparser = require('koa-bodyparser')//对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中
const jwt = require('koa-jwt')
const auth = require('./server/routes/auth.js')
const api = require('./server/routes/api.js')

const app = new Koa()
const router = koaRouter()

app.use(koaBodyparser())
app.use(json())
app.use(logger())

app.use(async function (ctx, next) { //中间件显示执行时间
    let start = new Date()
    await next()
    let ms = new Date() - start
    console.log('%s %s - %s', ctx.method, ctx.url, ms)
});

app.on('error', function(err, ctx) {
    console.log('server error', err);
})

router.use('/auth', auth.routes())  // 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径。
router.use('/api', jwt({secret: 'vue-koa-demo'}), api.routes()) // 所有走/api/打头的请求都需要经过jwt中间件的验证。secret密钥必须跟我们当初签发的secret一致

app.use(router.routes()) // 将路由规则挂载到Koa上。

module.exports = app.listen(8889, () => {
    console.log(`Koa is listening  in 8889`)
})
