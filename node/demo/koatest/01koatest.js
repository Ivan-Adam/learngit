import koa from 'koa'
const app=new koa()

//ctx   context   简写  中间件
app.use(async ctx=>{
    ctx.body="hello world"
})
app.listen(8081)