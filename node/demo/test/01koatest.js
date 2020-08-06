import koa from 'koa'
const app=new koa()

//ctx   context   简写  中间件
app.use(async ctx=>{
    if(ctx.url==='/'){
        ctx.body="hello world"
    }if(ctx.url==='/test'){
        ctx.body={
            code:0
        }
    }
    
})
app.listen(8081)