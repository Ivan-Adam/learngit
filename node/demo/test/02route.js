import Koa from 'koa'
import Router from 'koa-router'
const app = new Koa()
const router = new Router()
//路由写法
router.get('/', async ctx => {
    ctx.body = 'hello world'
})
router.get('/test', async ctx => {
    ctx.body = [1, 2, 3]
})
router.get('/jj', async ctx => {
    ctx.body = '111'
})
//某一路径下的统一操作
router.get('/test/:id', async ctx => {
    ctx.body = {
        id: ctx.params.id,
        time: Date.now()
    }
})
router.post('/list', async ctx => {
    ctx.body = 'post require'
})


// 路由分组
const group = new Router({
    prefix: '/group'
})
group.get('/', async ctx => {
    ctx.body = 'group'
})
group.get('/list', async ctx => {
    ctx.body = {
        code: 0,
        id: [1, 2, 3]
    }
})
group.post('/', async ctx => {
    ctx.body = 'group\'s root method post'
})

//路由的另一个分组
const sub = new Router({
    prefix: '/sub'
})
sub.get('/', async ctx => {
    ctx.body = 'this is sub\'s root get method'
})
sub.get('/list/:id', async ctx => {
    ctx.body = {
        code: 1,
        id: ctx.params.id
    }
})
sub.post('/name/:name', async ctx => {
    ctx.body = {
        code: 2,
        name: ctx.params.name
    }
})
//多层中间件的创建
/**
 * 
 * ############有个未解之谜
 * 为啥/db/:id这个路由无效
 * 
 * 因为ctx.time 不是一个const类型的变量，不能用new Date.now()
 */
const db = new Router()
db.get('/db', async ctx => {
    ctx.body = '这是db路由'
})
db.get('/db/:name', async (ctx, next) => {
    ctx.user = 'test'
    next()
}, async (ctx, next) => {
    ctx.time =  Date.now()
    next()
}, async ctx => {
    ctx.body = {
        user: ctx.user,
        time: ctx.time
    }
})

//重定向    redirect
const proxy =new Router()
proxy.get('/find',async ctx=>{
    ctx.redirect('/test')
})


//嵌套路由

const nest = new Router()
/**
 * 此处不同   ################
 * next把sub组的路由包裹在名下
 */
nest.use('/nest', sub.routes())


//与app 关联
//app.use(router.routes())
//allowedMethods()方法的使用   提一下功能：本来只支持get访问方式的接口
//接受了post方式访问时  response返回的Headers信息中会多一个Allow字段，
//提示可接受的请求方式
//以上需要有正确的路由地址
app.use(router.routes()).use(router.allowedMethods())
//group也要挂载在app上
app.use(group.routes()).use(group.allowedMethods())
app.use(sub.routes()).use(sub.allowedMethods())
//嵌套路由的挂载 
app.use(nest.routes()).use(nest.allowedMethods())
//多层中间件的路由的挂载
app.use(db.routes()).use(db.allowedMethods())

//重定向路由的挂载
app.use(proxy.routes()).use(proxy.allowedMethods())
app.listen(8082)